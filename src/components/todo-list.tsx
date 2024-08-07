import { AppDispatch } from "@/store";
import {
  removeTodo,
  selectColor,
  toggleCompleted,
} from "@/store/reducers/todo";
import { capitalize } from "@/utils/capitalize";
import { COLORS } from "@/utils/helpers/enums/colors";
import { memo, useRef } from "react";
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";

export interface TodoListProps {
  value: string;
  id: number;
  isCompleted: boolean;
  currentColor?: string;
}

function TodoListComponent({
  id,
  isCompleted,
  currentColor,
  value = "",
}: TodoListProps) {
  const dispatch = useDispatch<AppDispatch>();
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleOnSelectValue = () => {
    const color = selectRef.current?.value;

    if (color && color !== "Selecione") {
      dispatch(selectColor({ id, color }));
    }
  };

  return (
    <div className="flex items-center justify-between my-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={value.toLowerCase()}
          name={value.toLowerCase()}
          onChange={() => dispatch(toggleCompleted(id))}
          checked={isCompleted}
        />
        <label
          htmlFor={value.toLowerCase()}
          className={twMerge("text-black", isCompleted && "line-through")}
        >
          {value}
        </label>
      </div>

      <div className="flex items-center gap-2">
        <select
          ref={selectRef}
          name="colors"
          className="border py-1 px-2 capitalize"
          onChange={handleOnSelectValue}
          defaultValue={currentColor}
        >
          <option>Selecione</option>
          {Object.values(COLORS).map((color) => (
            <option key={color} value={color.toLocaleLowerCase()}>
              {capitalize(color)}
            </option>
          ))}
        </select>

        <button
          className="text-red-500"
          onClick={() => dispatch(removeTodo(id))}
        >
          x
        </button>
      </div>
    </div>
  );
}

export const TodoList = memo(TodoListComponent);
