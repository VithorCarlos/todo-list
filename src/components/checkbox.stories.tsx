import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

type Story = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {
    value: "Checkbox Text",
  },
};

export default meta;

export const Default = {};

export const LineThough: Story = {
  args: {
    hasLineThrough: true,
    checked: true,
  },
};
