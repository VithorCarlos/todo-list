import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    },
  },
};

export default preview;
