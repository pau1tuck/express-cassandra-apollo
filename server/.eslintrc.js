module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module", // Allows for the use of imports
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  extends: [
    "airbnb-typescript-prettier",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": [0],
    "import/prefer-default-export": "off",
    "max-classes-per-file": [1],
    "class-methods-use-this": [0],
    "@typescript-eslint/no-unused-vars": [0],
    "@typescript-eslint/no-explicit-any": [0],
    "@typescript-eslint/explicit-module-boundary-types": [0],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
