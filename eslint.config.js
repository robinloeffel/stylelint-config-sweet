import vitest from "@vitest/eslint-plugin";
import sweet from "eslint-config-sweet";
import { defineConfig } from "eslint/config";

export default defineConfig(
  sweet,
  {
    files: ["**/*.test.ts"],
    ...vitest.configs.recommended
  }
);
