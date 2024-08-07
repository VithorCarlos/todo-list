/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  coverageProvider: "v8",
  rootDir: "src",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },

  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],

  setupFilesAfterEnv: [
    "<rootDir>/config/jest/setup.ts",
    "@testing-library/jest-dom",
  ],

  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          target: "es2021",
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
};

export default config;
