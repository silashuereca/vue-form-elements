module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/recommended',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		"vue/html-self-closing": ["error", {
			"html": {
				"normal": "never",
				"component": "never"
			}
		}],
		indent: ["error", "tab"],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
};
