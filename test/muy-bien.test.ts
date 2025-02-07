import stylelint from "stylelint";
import { expect, test } from "vitest";

const files = "./test/muy-bien.scss";
const { errored } = await stylelint.lint({ files });

test("found no errors", () => {
  expect(errored).toBe(false);
});
