import { writeFile } from "fs/promises";

const dist = "./src/schema.graphql";
const url =
  "https://raw.githubusercontent.com/dqn/api.dqn.me/main/src/schema.graphql";

async function main(): Promise<void> {
  const res = await fetch(url);
  const schema = await res.text();
  await writeFile(dist, schema);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
