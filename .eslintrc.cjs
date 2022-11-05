/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "no-unused-vars": 0,
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
    //'no-unused-variable': 0,

    // 'no-unused-declaration': 0,
  },
  parser: "vue-eslint-parser",
  plugins: ["vue"],
};
