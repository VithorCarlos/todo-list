import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "text-white py-2 px-4 rounded-md",
  variants: {
    variant: {
      default: "bg-green-500",
      secondary: "bg-blue-500",
      outline: "text-black px-0 py-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof button> {
  children: React.ReactNode;
}

export function Button({
  children,
  variant,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={twMerge(button({ variant }), className)} {...props}>
      {children}
    </button>
  );
}
