module.exports = {
  env: {
    browser: true,
    commonjs: false,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "eslint:recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "arrow-body-style": 2,
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "prefer-const": 1,
  },
};
