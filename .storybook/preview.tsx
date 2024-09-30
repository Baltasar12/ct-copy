import type { Preview } from "@storybook/react";
import React from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/ui/hooks/theme-provider";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

import "./preview.scss";;

export const StoryTime = ({ children }) => (
  <div className={"storybook"}>
    {children}
  </div>
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <StoryTime>
        <Story />
      </StoryTime>
    ),

    withThemeFromJSXProvider({
      themes: {
        // Provide your custom themes here
        light: theme,
        dark: theme,
      },
      defaultTheme: "light",
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
