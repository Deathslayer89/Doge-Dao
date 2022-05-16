import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x8fA44135799929Bd8bd4CCBCAeF466Bb3DC0Ded5");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Doge in Rocket",
        description: "This NFT will give you access to Doge DAO!",
        image: readFileSync("scripts/assets/doge-to-the-moon-05.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();