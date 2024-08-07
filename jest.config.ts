export default {
  rootDir: "src",
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/config/jest/fileMock.ts",
    "^.+\\.(css|less|scss|sass)$": "<rootDir>/config/jest/styleMock.ts",
    "^@/(.*)$": "<rootDir>/$1",
  },
  setupFilesAfterEnv: ["./config/jest/setupTests.ts"],
  moduleFileExtensions: ["tsx", "ts", "js", "json", "jsx", "node"],
  modulePaths: ["<rootDir>/src"],
};
