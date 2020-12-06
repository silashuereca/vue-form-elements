module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/recommended',
		"plugin:json/recommended"
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
		"vue/max-attributes-per-line": ["error", {
			"singleline": 5,
			"multiline": {
				"max": 1,
				"allowFirstLine": false
			}
		}],
		"vue/v-bind-style": ["error", "longform"],
		indent: ["error", "tab"],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
};
