// eslint.config.js
const stylisticTs = require('@stylistic/eslint-plugin-ts');
const parserTs = require('@typescript-eslint/parser');


module.exports = {
    plugins: {
        '@stylistic/ts': stylisticTs
    },
    languageOptions: {
        parser: parserTs,
    },
    files: [
        '**/*.ts'
    ],
    ignores: [
        '**/*.config.ts',
        '**/*.config.js',
    ],
    rules: {
        '@stylistic/ts/indent': ['error', 4],
        '@stylistic/ts/keyword-spacing': ['error', { 'before': true }],
        'quotes': [1, 'single'],
        'comma-dangle': [2, 'always-multiline'],
        "quote-props": [2, 'as-needed'],
        // ...
    }
};