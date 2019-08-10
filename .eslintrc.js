module.exports = {
    extends: 'airbnb',
    settings: {
        'import/resolver': {
            'node': {
                'paths': ['src']
            }
        }
    },
    rules: {
        'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
        'max-len': ['warn', { 'code': 120 }],
    }
};