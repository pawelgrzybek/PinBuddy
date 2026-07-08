const globals = require("globals");
const react = require("eslint-plugin-react");
const prettierRecommended = require("eslint-plugin-prettier/recommended");

// Flat config (ESLint 9). ESLint's native parser handles class fields + JSX, so
// no Babel parser is needed. Behaviour mirrors the previous .eslintrc.js:
// prettier-as-lint plus a no-console warning.
module.exports = [
  {
    ignores: ["dist/**", "public/**"]
  },
  {
    files: ["**/*.{js,jsx}"],
    plugins: { react },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.worker,
        ...globals.serviceworker,
        chrome: "readonly",
        // Vitest globals (globals: true in vitest.config.js)
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        vi: "readonly"
      }
    },
    settings: {
      react: { version: "detect" }
    },
    rules: {
      "no-console": "warn"
    }
  },
  prettierRecommended
];
