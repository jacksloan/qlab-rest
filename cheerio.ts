import axios from "axios";
import cheerio from "cheerio";
import fs from "fs";
axios.get("https://qlab.app/docs/v4/scripting/osc-dictionary-v4/").then(
  (response) => {
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);
      const oscDictionary = [];
      $("h4").each(function () {
        const it = $(this);
        const path = it.text();
        const description = it.nextUntil("h4").text();
        oscDictionary.push({ path, description });
      });
      fs.writeFileSync("osc-dictionary.json", JSON.stringify(oscDictionary));
    }
  },
  (error) => console.log(error)
);
