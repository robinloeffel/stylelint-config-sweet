import stylelint from "stylelint";
import { describe, expect, it } from "vitest";

const { errored, results } = await stylelint.lint({
  files: "./test/no-bueno.scss"
});

describe("no bueno", () => {
  it("found errors", () => {
    expect(errored).toBe(true);
  });

  it("found selector pattern mismatch (vanilla stylelint)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "selector-class-pattern"
    )).toBeDefined();
  });

  it("found wrong property case (@stylistic/stylelint-config)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "@stylistic/property-case"
    )).toBeDefined();
  });

  it("found obsolete property (@isnotdefined/stylelint-plugin)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "@isnotdefined/no-obsolete"
    )).toBeDefined();
  });

  it("found unordered ruleset (stylelint-config-recess-order)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "order/properties-order"
    )).toBeDefined();
  });

  it("found unnecessary if not null (stylelint-config-standard-scss)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "order/properties-order"
    )).toBeDefined();
  });

  it("found unknown property (extra rule of config)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "scss/property-no-unknown"
    )).toBeDefined();
  });
});
