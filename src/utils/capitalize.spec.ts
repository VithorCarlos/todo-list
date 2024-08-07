import { capitalize } from "./capitalize";

describe("Capitalize text", () => {
  it("Should be able to capitalize text", () => {
    const textOne = "john doe";
    const textTwo = "maria";

    expect(capitalize(textOne)).toBe("John doe");
    expect(capitalize(textTwo)).toBe("Maria");
  });
});
