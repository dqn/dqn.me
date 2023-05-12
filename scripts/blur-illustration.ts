import { parse } from "path";
import sharp from "sharp";

const width = 128;
const sigma = 4;

async function main(): Promise<void> {
  const imagePath = process.argv[2];

  if (imagePath === undefined) {
    console.error("Please provide an image path");
    process.exit(1);
  }

  await sharp(imagePath)
    .resize(width)
    .blur(sigma)
    .toFormat("jpg")
    .toFile(parse(imagePath).name + "-blurred.jpg");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
