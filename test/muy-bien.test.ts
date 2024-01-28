import { expect, test } from "vitest";
import stylelint from "stylelint";

test("found no errors", async() => {
	const { errored } = await stylelint.lint({ files: "./test/muy-bien.scss" });
	expect(errored).toBe(false);
});
