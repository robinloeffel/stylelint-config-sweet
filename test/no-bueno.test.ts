import stylelint from "stylelint";
import { expect, test } from "vitest";

const files = "./test/no-bueno.scss";

test("found errors", async() => {
	const { errored } = await stylelint.lint({ files });

	expect(errored).toBe(true);
});

test("found selector pattern mismatch (vanilla stylelint)", async() => {
	const { results } = await stylelint.lint({ files });

	expect(results.at(0)?.warnings.find(
		warning => warning.rule === "selector-class-pattern"
	)).toBeTruthy();
});

test("found wrong property case (@stylistic/stylelint-config)", async() => {
	const { results } = await stylelint.lint({ files });

	expect(results.at(0)?.warnings.find(
		warning => warning.rule === "@stylistic/property-case"
	)).toBeTruthy();
});

test("found obsolete property (@isnotdefined/stylelint-plugin)", async() => {
	const { results } = await stylelint.lint({ files });

	expect(results.at(0)?.warnings.find(
		warning => warning.rule === "@isnotdefined/no-obsolete"
	)).toBeTruthy();
});

test("found unordered ruleset (stylelint-config-recess-order)", async() => {
	const { results } = await stylelint.lint({ files });

	expect(results.at(0)?.warnings.find(
		warning => warning.rule === "order/properties-order"
	)).toBeTruthy();
});

test("found unnecessary if not null (stylelint-config-standard-scss)", async() => {
	const { results } = await stylelint.lint({ files });

	expect(results.at(0)?.warnings.find(
		warning => warning.rule === "order/properties-order"
	)).toBeTruthy();
});

test("found unknown property (extra rule of config)", async() => {
	const { results } = await stylelint.lint({ files });

	expect(results.at(0)?.warnings.find(
		warning => warning.rule === "scss/property-no-unknown"
	)).toBeTruthy();
});
