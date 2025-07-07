import stylelint from "stylelint";
import { describe, expect, it } from "vitest";

const { errored } = await stylelint.lint({
  files: "./test/muy-bien.scss"
});

describe("muy bien", () => {
  it("found no errors", () => {
    expect(errored).toBe(false);
  });
});
