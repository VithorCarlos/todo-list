import { capitalize } from "@/utils/capitalize";
import { ComponentProps, memo } from "react";
import { twMerge } from "tailwind-merge";

export interface CheckboxProps extends ComponentProps<"input"> {
  value: string;
  hasLineThrough?: boolean;
}

const CheckboxComponent: React.FC<CheckboxProps> = ({
  value,
  hasLineThrough,
  ...props
}) => {
  return (
    <div key={value} className="flex items-center gap-2">
      <input type="checkbox" id={value} value={value} {...props} />
      <label
        htmlFor={value}
        className={twMerge(
          "text-black select-none",
          hasLineThrough && "line-through"
        )}
      >
        {capitalize(value)}
      </label>
    </div>
  );
};

export const Checkbox = memo(CheckboxComponent);
