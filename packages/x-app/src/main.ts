import { awesomeFn } from "@quramy/x-core";
import { add } from "@quramy/x-core/src/math";

export function main() {
  // dependencies across child packages
  const out = awesomeFn();
  console.log(add(1, 1));
  return out;
}
