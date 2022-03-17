import { BehaviorSubject, filter, firstValueFrom, map, Observable } from "rxjs";
import osc from "osc";

export interface QLabResponse {
  address: string;
  args?: [
    {
      type: string;
      value: string;
    }
  ];
}

export class Osc {
  public replies$: Observable<QLabResponse>;

  private udpPort;
  private _replies$ = new BehaviorSubject({ address: "" });

  constructor(config: { onReady: () => void }) {
    this.replies$ = this._replies$.asObservable();
    this.udpPort = new osc.UDPPort({
      localAddress: "0.0.0.0",
      localPort: 53001,
      metadata: true,
    });
    this.udpPort.on("ready", config.onReady);
    this.udpPort.on("message", (oscMsg) => this._replies$.next(oscMsg));
    this.replies$.subscribe((oscReply) => console.log({ oscReply }));
  }

  open() {
    this.udpPort.open();
  }

  close() {
    this.udpPort.close();
  }

  async sendOscCommand(address: string, expectResponse: boolean, args?: any) {
    this.udpPort.send({ address, args }, "127.0.0.1", 53000);
    const matchingMessage = this.replies$.pipe(
      filter((it) => it.address.includes(address)),
      map((msg) => {
        console.log(msg?.args?.[0])
        const maybeJson = msg?.args?.[0]?.value;
        if (!maybeJson) {
          return null;
        }
        return JSON.parse(maybeJson);
      })
    );

    if (expectResponse) {
      return firstValueFrom(matchingMessage);
    }
    return null;
  }
}
