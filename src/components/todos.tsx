import { TodoList } from "./todo-list";
import { capitalize } from "@/utils/capitalize";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useMemo, useRef } from "react";
import {
  addTodo,
  changeStatus,
  markAllCompleted,
  removeAllCompleted,
  selectColorsToFilter,
} from "@/store/reducers/todo";
import { STATUS } from "@/utils/helpers/enums/status";
import { twMerge } from "tailwind-merge";
import { COLORS } from "@/utils/helpers/enums/colors";
import { Input } from "./input";
import { Button } from "./button";
import { Checkbox } from "./checkbox";

export function Todos() {
  const { data: todos, filters } = useSelector(
    (state: RootState) => state.todos
  );

  const dispatch = useDispatch<AppDispatch>();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    const currentValue = inputRef.current?.value;

    if (currentValue) {
      dispatch(addTodo({ text: currentValue }));
      clearInput();
    }
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const todoList = useMemo(() => {
    let filteredTodos = todos;

    if (filters.colors.length > 0) {
      filteredTodos = filteredTodos.filter(
        (todo) =>
          todo.color && filters.colors.includes(todo.color.toLowerCase())
      );
    }

    if (filters.status !== STATUS.ALL) {
      filteredTodos = filteredTodos.filter((todo) =>
        filters.status === STATUS.ACTIVE ? !todo.completed : todo.completed
      );
    }

    return filteredTodos;
  }, [todos, filters]);

  return (
    <div className="flex flex-col bg-slate-100 max-w-3xl w-full min-h-96  rounded-lg p-4">
      <div className="flex items-center justify-between gap-3 border-b pb-2">
        <div className="flex-grow bg-slate-200  rounded-lg">
          <Input
            ref={inputRef}
            type="text"
            placeholder="What's need to be done?"
            onKeyDown={(event) => {
              event.key === "Enter" && handleAddTodo();
            }}
          />
        </div>
        <Button onClick={handleAddTodo}>Add</Button>
      </div>

      <div className="overflow-y-auto max-h-[400px] lg:max-h-[500px]">
        {todoList.length === 0 && (
          <p className="my-2 text-gray-600 text-center">
            Add new todos to get started!
          </p>
        )}
        {todoList.map((todo) => (
          <TodoList
            key={todo.id}
            isCompleted={todo.completed}
            currentColor={todo.color!}
            id={todo.id}
            value={todo.text}
          />
        ))}
      </div>

      <div className="self-start mt-auto border-t py-2 flex  flex-wrap lg:flex-row w-full  justify-between gap-3 ">
        <div>
          <strong className="block mb-2">Actions</strong>

          <div className="flex flex-col items-start gap-2">
            <Button
              variant="secondary"
              onClick={() => dispatch(markAllCompleted())}
            >
              Check all
            </Button>

            <Button
              variant="secondary"
              onClick={() => dispatch(removeAllCompleted())}
            >
              Uncheck all
            </Button>
          </div>
        </div>
        <div>
          <strong className="block mb-2">Remaing todos</strong>
          <p>{todos.length} item left</p>
        </div>
        <div className="flex items-start flex-col">
          <strong className="block mb-2">Filter by status</strong>

          {Object.values(STATUS).map((status) => (
            <Button
              key={status}
              variant="outline"
              className={twMerge(
                filters.status === status && "font-bold text-blue-600"
              )}
              onClick={() => dispatch(changeStatus(status))}
            >
              {capitalize(status)}
            </Button>
          ))}
        </div>
        <div className="flex items-start flex-col ">
          <strong className="block mb-2">Filter by color</strong>
          <div className="flex flex-col gap-2">
            {Object.values(COLORS).map((color) => (
              <Checkbox
                id={color}
                key={color}
                value={color}
                checked={filters?.colors?.includes(color.toLocaleLowerCase())}
                onChange={() => dispatch(selectColorsToFilter(color))}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
