import React from "react";
import { render } from "react-testing-library";
import { ThemeProvider } from "styled-components";

import { theme } from "../theme/globalStyles";

export const renderWithTheme = (component) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
