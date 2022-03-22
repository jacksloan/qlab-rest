import * as _ from 'lodash';
import * as osc from 'osc';
import {
  BehaviorSubject,
  catchError,
  filter,
  firstValueFrom,
  map,
  Observable,
  of,
  timeout,
} from 'rxjs';

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

  private _replies$ = new BehaviorSubject({ address: '' });

  constructor(private host = '127.0.0.1', private port = 53000) {
    this.replies$ = this._replies$.asObservable();
    this.udpPort = new osc.UDPPort({
      localAddress: '0.0.0.0',
      localPort: 53001,
      metadata: true,
    });
    this.onMessage((oscMsg) => this._replies$.next(oscMsg));
    // this.replies$.subscribe((oscReply) => console.log(oscReply.args));
  }

  open(config: { onReady: (oscMsg?) => void }) {
    this.udpPort.open();
    this.onReady(config.onReady);
  }

  close() {
    this.udpPort.close();
  }

  send(
    address,
    args?: {
      // int, string, float, or blob
      type: 'i' | 's' | 'f' | 'b';
      value: string | number;
    }[]
  ) {
    this.udpPort.send({ address, args }, this.host, this.port);
  }

  onReady(handler: () => void) {
    this.udpPort.on('ready', handler);
  }

  onMessage(handler: (oscMsc) => void) {
    this.udpPort.on('message', handler);
  }

  async waitForReply(address: string) {
    const matchingMessage = this.replies$.pipe(
      filter((it) => it.address.includes(address)),
      map((msg) => JSON.parse(msg?.args?.[0]?.value || null)),
      // timeout all replies after 1 second
      timeout({ first: 1_000 }),
      catchError(() => of({}))
    );
    return firstValueFrom(matchingMessage);
  }

  async sendOscCommand(
    address: string,
    expectResponse: boolean,
    args?: (string | number)[]
  ): Promise<null | { status: string; address: string; data: any }> {
    const _args =
      (args || []).length < 1
        ? undefined
        : args.map((value) => {
            const type = _.isNumber(value) ? ('i' as const) : ('s' as const);
            return { type, value };
          });

    this.send(address, _args);

    if (expectResponse) {
      const response = await this.waitForReply(address);
      return response;
    }

    return null;
  }
}
