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
import { Checkbox } from "./checkbox";
import { X } from "lucide-react";

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
    <div className="flex items-center justify-between my-2 gap-2">
      <div className="flex items-center gap-2">
        <Checkbox
          id={id?.toString()}
          value={value.toLowerCase()}
          checked={isCompleted}
          onChange={() => dispatch(toggleCompleted(id))}
          hasLineThrough={isCompleted}
        />
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
          data-testid={`remove-todo-${id}`}
          onClick={() => dispatch(removeTodo(id))}
        >
          <X className="text-red-500 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export const TodoList = memo(TodoListComponent);
