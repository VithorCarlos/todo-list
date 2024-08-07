import { nextId } from "./next-todo-id";

describe("Next todo is", () => {
  it("Should be able to get next id", () => {
    const items = [
      {
        id: 0,
        name: "john doe",
      },
      {
        id: 1,
        name: "ana doe",
      },
    ];

    expect(nextId(items)).toBe(2);
  });
});
