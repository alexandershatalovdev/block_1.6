module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    // Indentation
    indent: ["error", 2],

    // Semicolons are required
    semi: ["error", "always"],

    // Single quotes for strings
    quotes: ["error", "single"],

    // No unused variables
    "no-unused-vars": "warn",

    // Avoid console.log and other console statements in production
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",

    // Enforce trailing commas in multiline object and array literals
    "comma-dangle": ["error", "always-multiline"],

    // Enforce consistent spacing inside array brackets
    "array-bracket-spacing": ["error", "never"],

    // Enforce consistent spacing inside object literals
    "object-curly-spacing": ["error", "always"],

    // Enforce consistent spacing before and after arrows
    "arrow-spacing": ["error", { before: true, after: true }],

    // Enforce consistent spacing around operators
    "space-infix-ops": "error",

    // Enforce no-multiple-empty-lines
    "no-multiple-empty-lines": ["error", { max: 1 }],

    // Enforce a maximum line length
    "max-len": ["error", { code: 120, tabWidth: 2 }],

    // Disallow unnecessary escape usage
    "no-useless-escape": "error",

    // Enforce consistent spacing inside template literals
    "template-curly-spacing": ["error", "always"],

    // Allow async-await outside of a function
    "no-async-promise-executor": "off",

    // Allow for-await-in-loop
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],

    // Disable the requirement to have return statement in arrow functions
    "consistent-return": "off",

    // Enforce the use of === and !==
    eqeqeq: ["error", "always", { null: "ignore" }],

    // Disable the requirement to have default case in switch statements
    "default-case": "off",
  },
};
