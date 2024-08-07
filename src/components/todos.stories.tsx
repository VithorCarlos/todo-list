import type { Meta } from "@storybook/react";
import { Todos } from "./todos";
import { Provider } from "@/providers";

const meta: Meta<typeof Todos> = {
  component: Todos,
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;

export const Default = {};
