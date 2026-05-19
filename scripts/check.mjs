import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/ShardoDatePicker.js", import.meta.url), "utf8");
const hasLineComment = /(^|[^:])\/\//.test(source);
const hasBlockComment = /\/\*/.test(source);

if (hasLineComment || hasBlockComment) {
  throw new Error("Code comments are not allowed in src/ShardoDatePicker.js");
}

console.log("check passed");


