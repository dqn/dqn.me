import dedent from "dedent";
import { writeFile } from "fs/promises";

const dist = "./src/schema.graphql";
const url =
  "https://raw.githubusercontent.com/dqn/api.dqn.me/main/src/app/graphql/typeDefs.ts";

async function main(): Promise<void> {
  const res = await fetch(url);
  const text = await res.text();
  const schema = text.match(/(type .+})/s)?.[1];

  if (schema === undefined) {
    throw new Error("invalid schema");
  }

  await writeFile(dist, dedent`${schema}` + "\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
