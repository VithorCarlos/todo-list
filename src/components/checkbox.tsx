import { capitalize } from "@/utils/capitalize";
import { memo } from "react";
import { Checkbox as CheckBoxMui, FormControlLabel } from "@mui/material";

export interface CheckboxProps {
  id: string;
  value: string;
  hasLineThrough?: boolean;
  checked?: boolean;
  onChange?: () => void;
}

const CheckboxComponent: React.FC<CheckboxProps> = ({
  id,
  value,
  hasLineThrough,
  checked = false,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <FormControlLabel
        control={<CheckBoxMui id={id} value={value} />}
        label={capitalize(value)}
        {...{ id, checked, onChange }}
        style={{
          ...(hasLineThrough && {
            textDecorationLine: "line-through",
          }),
          userSelect: "none",
        }}
      />
    </div>
  );
};

export const Checkbox = memo(CheckboxComponent);
