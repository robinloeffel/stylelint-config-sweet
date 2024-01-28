import { expect, test } from "vitest";
import stylelint from "stylelint";

test("found errors", async() => {
	const { errored } = await stylelint.lint({ files: "./test/no-bueno.scss" });
	expect(errored).toBe(true);
});

test("found selector pattern mismatch (vanilla stylelint)", async() => {
	const { results } = await stylelint.lint({ files: "./test/no-bueno.scss" });
	const { warnings } = results.at(0)!;

	expect(warnings.filter(warning => warning.rule === "selector-class-pattern")).toHaveLength(1);
});

test("found wrong property case (@stylistic/stylelint-config)", async() => {
	const { results } = await stylelint.lint({ files: "./test/no-bueno.scss" });
	const { warnings } = results.at(0)!;

	expect(warnings.filter(warning => warning.rule === "@stylistic/property-case")).toHaveLength(1);
});

test("found obsolete property (@isnotdefined/stylelint-plugin)", async() => {
	const { results } = await stylelint.lint({ files: "./test/no-bueno.scss" });
	const { warnings } = results.at(0)!;

	expect(warnings.filter(warning => warning.rule === "@isnotdefined/no-obsolete")).toHaveLength(1);
});

test("found unordered ruleset (stylelint-config-recess-order)", async() => {
	const { results } = await stylelint.lint({ files: "./test/no-bueno.scss" });
	const { warnings } = results.at(0)!;

	expect(warnings.filter(warning => warning.rule === "order/properties-order")).toHaveLength(1);
});

test("found unnecessary if not null (stylelint-config-standard-scss)", async() => {
	const { results } = await stylelint.lint({ files: "./test/no-bueno.scss" });
	const { warnings } = results.at(0)!;

	expect(warnings.filter(warning => warning.rule === "order/properties-order")).toHaveLength(1);
});

test("found unknown property (extra rule of config)", async() => {
	const { results } = await stylelint.lint({ files: "./test/no-bueno.scss" });
	const { warnings } = results.at(0)!;

	expect(warnings.filter(warning => warning.rule === "scss/property-no-unknown")).toHaveLength(1);
});
