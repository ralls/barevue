module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'indent': ['error', 4],
        'generator-star-spacing': 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
