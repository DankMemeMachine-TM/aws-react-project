import { defineFunction } from "@aws-amplify/backend";

export const dmmFunction = defineFunction({
  name: "dmm_function",
  entry: "./handler.ts"
});