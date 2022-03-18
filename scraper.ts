import axios from "axios";
import cheerio from "cheerio";
import fs from "fs";
axios.get("https://qlab.app/docs/v4/scripting/osc-dictionary-v4/").then(
  (response) => {
    if (response.status === 200) {
      const html = response.data;

      const $ = cheerio.load(html);

      const oscDictionary = $("hr")
        .map(function (i) {
          const section = $(this).nextUntil("hr");
          const isDictionaryEntry = (section[0] as any).name === "h4";
          if (isDictionaryEntry) {
            const getElements = (selector: string) =>
              section
                .filter(selector)
                .map(function () {
                  return $(this).text();
                })
                .toArray();
            const paths = getElements("h4");
            const description = getElements(":not(h4)").join(" ");
            return { paths, description };
          }
        })
        .filter(Boolean)
        .toArray();

      fs.writeFileSync("osc-dictionary.json", JSON.stringify(oscDictionary));
    }
  },
  (error) => console.log(error)
);
