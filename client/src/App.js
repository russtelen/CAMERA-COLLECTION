import React from "react";
import Dashboard from "./layouts/Dashboard";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const THEME = createMuiTheme({
  typography: {
    fontFamily: `'Lobster', cursive;`,
    fontSize: 13,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
