import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/main.ts",
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [nodeResolve(), typescript()],
};
