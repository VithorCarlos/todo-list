import { STATUS } from "@/utils/helpers/enums/status";
import {
  addTodo,
  changeStatus,
  markAllCompleted,
  removeAllCompleted,
  removeTodo,
  selectColor,
  selectColorsToFilter,
  todosSliceReducer,
  toggleCompleted,
} from ".";
import { TodoAppStateData } from "./action-types";
import { COLORS } from "@/utils/helpers/enums/colors";

describe("Redux todo test", () => {
  let initialState: TodoAppStateData;

  beforeEach(() => {
    initialState = {
      data: [{ id: 0, text: "Learn React", completed: true, color: "blue" }],
      filters: {
        status: "Active",
        colors: [],
      },
    };
  });

  it("Verify if state is initialized", () => {
    const action = { type: "", payload: null };

    const result = todosSliceReducer(initialState, action);

    expect(result.data).toHaveLength(1);
  });

  it("Should be able to add a new todo", () => {
    const action = addTodo({ text: "Hello world" });

    const result = todosSliceReducer(initialState, action);

    expect(result.data).toHaveLength(2);

    expect(result.data[0].text).toBe("Hello world");
  });

  it("Should be able to remove an todo", () => {
    const action = removeTodo(initialState.data[0].id);

    const result = todosSliceReducer(initialState, action);

    expect(result.data).toHaveLength(0);
  });

  it("Should be able to toggle an todo to completed", () => {
    const action = toggleCompleted(initialState.data[0].id);

    const result = todosSliceReducer(initialState, action);

    expect(result.data[0].completed).toBe(false);
  });

  it("Should be able to change color", () => {
    const action = selectColor({ id: initialState.data[0].id, color: "red" });

    const result = todosSliceReducer(initialState, action);

    expect(result.data[0].color).toBe("red");
  });

  it("Should be able to mark all todo completed", () => {
    const action = markAllCompleted();

    initialState.data.push({ id: 1, text: "Todo test", completed: false });

    const result = todosSliceReducer(initialState, action);

    expect(result.data).toHaveLength(2);
    expect(result.data[0].completed).toBe(true);
    expect(result.data[1].completed).toBe(true);
  });

  it("Should be able to un-mark all todo completed", () => {
    const action = removeAllCompleted();

    initialState.data.push({ id: 1, text: "Todo test", completed: true });

    const result = todosSliceReducer(initialState, action);

    expect(result.data).toHaveLength(2);
    expect(result.data[0].completed).toBe(false);
    expect(result.data[1].completed).toBe(false);
  });

  it("Should be able to change status by filter", () => {
    const action = changeStatus(STATUS.ACTIVE);

    const result = todosSliceReducer(initialState, action);

    expect(result.filters.status).toBe(STATUS.ACTIVE);
  });

  it("Should be able to select color by filter", () => {
    const firstAction = selectColorsToFilter(COLORS.ORANGE);
    let updatedState = todosSliceReducer(initialState, firstAction);

    const secondAction = selectColorsToFilter(COLORS.RED);
    updatedState = todosSliceReducer(updatedState, secondAction);

    expect(updatedState.filters.colors).toStrictEqual(
      expect.arrayContaining([
        COLORS.ORANGE.toLowerCase(),
        COLORS.RED.toLowerCase(),
      ])
    );
  });
});
