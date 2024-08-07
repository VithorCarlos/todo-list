import { customRender } from "@/config/jest/test-utils";
import { App } from "../App";

test("Renders the main page", () => {
  customRender(<App />);
  expect(true).toBe(true);
});
