module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'google', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 0,
		'react/no-unescaped-entities': 0,
		'react/display-name': 0,
		'no-unused-vars': 0,
		'new-cap': 0,
		'require-jsdoc': 0,
		quotes: [
			'error',
			'single',
			{ avoidEscape: true, allowTemplateLiterals: true },
		],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
