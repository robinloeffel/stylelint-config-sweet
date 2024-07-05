import stylelint from "stylelint";
import { expect, test } from "vitest";

test("found no errors", async() => {
	const { errored } = await stylelint.lint({ files: "./test/muy-bien.scss" });
	expect(errored).toBe(false);
});
