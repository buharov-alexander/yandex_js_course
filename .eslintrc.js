module.exports = {
    extends: 'airbnb',
    parser: "babel-eslint",
    env: {
        "browser": true
    },
    settings: {
        'import/resolver': {
            'node': {
                'paths': ['src']
            }
        }
    },
    rules: {
        'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
        'react/require-default-props': ['off'],
        'max-len': ['warn', { 'code': 120 }],
    }
};