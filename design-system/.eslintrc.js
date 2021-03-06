const OFF = 0
// const WARN = 1
// const ERROR = 2

module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        // "plugin:@typescript-eslint/recommended"
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2019,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'svelte3',
    ],
    'overrides': [{
        'files': ['*.svelte'],
        'processor': 'svelte3/svelte3'
    }],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'missing-custom-element-compile-options': OFF,
    },
    'settings': {
        // 'svelte3/typescript': () => require('typescript'), // pass the TypeScript package to the Svelte plugin
        // OR
        'svelte3/typescript': true, // load TypeScript as peer dependency
        // ...
        'svelte3/compiler-options': {
            customElement: true,
        },
    }
}
