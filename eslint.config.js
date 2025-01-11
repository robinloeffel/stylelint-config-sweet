import sweet from "eslint-config-sweet";

/** @type {import("typescript-eslint").Config} */
export default [
	...sweet,
	{
		rules: {
			"unicorn/no-null": "off",
			"@stylistic/no-tabs": "off",
			"@stylistic/indent": ["error", "tab"]
		}
	}
];
