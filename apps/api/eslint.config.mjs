import baseConfig from "@workspace/eslint-config/base.js";

export default [
  ...baseConfig,
  {
    ignores: ["dist/**"],
  },
  {
    rules: {
      // Allow unused vars starting with underscore (Express middleware signatures)
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
];
