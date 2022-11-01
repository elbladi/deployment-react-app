module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "linebreak-style": 0,
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/order": "off",
    "import/prefer-default-export": "off",
    "comma-dangle": "off",
    camelcase: "off",
  },
};
