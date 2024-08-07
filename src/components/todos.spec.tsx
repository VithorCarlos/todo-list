import userEvent from "@testing-library/user-event";
import { Todos } from "./todos";
import { customRender } from "@/config/jest/test-utils";
import { capitalize } from "@/utils/capitalize";
import { screen, cleanup } from "@testing-library/react";

describe("Todos test", () => {
  let inputElement: HTMLInputElement;
  let buttonAddTodoElement: HTMLButtonElement;

  beforeEach(() => {
    customRender(<Todos />);
    inputElement = screen.getByPlaceholderText("What's need to be done?");
    buttonAddTodoElement = screen.getByText("Add");
  });

  afterEach(() => {
    cleanup();
  });

  it("Should be able to add a new todo", async () => {
    const value = "my new todo";

    await userEvent.type(inputElement, value);

    await userEvent.click(buttonAddTodoElement);

    expect(screen.getByLabelText(capitalize(value))).toBeInTheDocument();
  });

  it("Should be able to remove an todo", async () => {
    const value = "Do something";

    await userEvent.type(inputElement, value);

    await userEvent.click(buttonAddTodoElement);

    const elementToRemove = screen.getByLabelText(capitalize(value));

    const buttonRemoveElement = screen.getByTestId(
      `remove-todo-${elementToRemove.id}`
    );

    await userEvent.click(buttonRemoveElement);

    expect(elementToRemove).not.toBeInTheDocument();
  });

  it("Should be able to check an todo", async () => {
    const value = "new todo to check";

    await userEvent.type(inputElement, value);

    await userEvent.click(buttonAddTodoElement);

    const elementoToCheck = screen.getByLabelText(capitalize(value));

    await userEvent.click(elementoToCheck);

    expect(elementoToCheck).toBeChecked();
  });

  it("Should be able to uncheck an todo", async () => {
    const value = "new todo to uncheck";

    await userEvent.type(inputElement, value);

    await userEvent.click(buttonAddTodoElement);

    const elementoToCheck = screen.getByLabelText(capitalize(value));

    await userEvent.click(elementoToCheck);

    await userEvent.click(elementoToCheck);

    expect(elementoToCheck).not.toBeChecked();
  });
});
