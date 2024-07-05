/** @type {import("stylelint").Config} */
export default {
	extends: [
		"stylelint-config-standard-scss",
		"stylelint-config-recess-order",
		"@stylistic/stylelint-config",
		"stylelint-config-html"
	],
	plugins: [
		"@isnotdefined/stylelint-plugin"
	],
	rules: {
		"color-named": "never",
		"property-no-unknown": null,
		"declaration-property-value-disallowed-list": [{
			transition: "/all/"
		}, {
			message: "Avoid using \"all\" in transition declarations. Be more specific."
		}],
		"selector-disallowed-list": [ "/:focus(?!-.*)/", {
			splitList: true,
			message: "Avoid the \":focus\" pseudo-class. Use \":focus-visible\" instead."
		}],
		"@isnotdefined/no-obsolete": true,
		"@stylistic/block-closing-brace-newline-after": [ "always", {
			ignoreAtRules: [ "if", "else" ]
		}],
		"@stylistic/indentation": null,
		"scss/at-mixin-argumentless-call-parentheses": "never",
		"scss/at-use-no-unnamespaced": true,
		"scss/at-use-no-redundant-alias": true,
		"scss/block-no-redundant-nesting": true,
		"scss/dimension-no-non-numeric-values": true,
		"scss/dollar-variable-first-in-block": [ true, {
			ignore: [ "comments", "imports" ]
		}],
		"scss/dollar-variable-no-namespaced-assignment": true,
		"scss/function-calculation-no-interpolation": true,
		"scss/function-color-relative": true,
		"scss/map-keys-quotes": "always",
		"scss/no-duplicate-dollar-variables": true,
		"scss/property-no-unknown": true,
		"scss/selector-no-redundant-nesting-selector": true,
		"scss/selector-no-union-class-name": true
	},
	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true
};
