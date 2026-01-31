import fs from "node:fs/promises";
import openapi, { astToString } from "openapi-typescript";

const ast = await openapi("https://api.ibkr.com/gw/api/v3/api-docs", {
  immutable: true,
  rootTypes: true,
  rootTypesNoSchemaPrefix: true
});
const types = astToString(ast);

await fs.writeFile("src/lib/types/ibkr.d.ts", types);
