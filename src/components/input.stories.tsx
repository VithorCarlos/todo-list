import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    placeholder: "What's need to be done?",
  },
};

export default meta;

export const Default = {};

export const Filled: Story = {
  args: {
    value: "This is the input filled",
  },
};
