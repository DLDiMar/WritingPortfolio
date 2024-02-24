module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react'],
    parserOptions: {
      ecmaVersion: 2021, // or later
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  };
  