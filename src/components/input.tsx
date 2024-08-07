import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {}

const InputComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (props: InputProps, ref) => {
  return (
    <input
      ref={ref}
      className="text-black w-full bg-slate-200 p-2 px-3 outline-none rounded-lg"
      {...props}
    />
  );
};

export const Input = forwardRef(InputComponent);

Input.displayName = "Input";
