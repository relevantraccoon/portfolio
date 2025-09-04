import React, { type JSX } from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./defaultTheme";

export const DefaultThemeProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
