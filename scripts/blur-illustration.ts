import sharp from "sharp";

const width = 512;
const height = 384;
const sigma = 10;

async function main(): Promise<void> {
  const imagePath = process.argv[2];

  if (imagePath === undefined) {
    console.error("Please provide an image path");
    process.exit(1);
  }

  await sharp(imagePath)
    .resize(width, height)
    .blur(sigma)
    .toFormat("jpg")
    .toFile(imagePath.replace(".png", ".jpg"));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
