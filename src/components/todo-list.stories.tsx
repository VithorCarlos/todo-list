// src/stories/todo-list.stories.tsx

import { Meta, StoryObj } from "@storybook/react";
import { TodoList } from "./todo-list";
import { Provider } from "@/providers";
import { COLORS } from "@/utils/helpers/enums/colors";

const meta: Meta<typeof TodoList> = {
  component: TodoList,
  args: {
    value: "First item",
  },
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;

export const Default: StoryObj = {};

export const Checked: StoryObj<typeof TodoList> = {
  args: {
    isCompleted: true,
    currentColor: COLORS.RED.toLocaleLowerCase(),
  },
};
