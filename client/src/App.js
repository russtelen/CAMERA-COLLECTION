import React, { useState, useMemo, useEffect } from "react";
import Dashboard from "./layouts/Dashboard";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { UserContext } from "./context/UserContext";

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
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <ThemeProvider theme={THEME}>
      <UserContext.Provider value={value}>
        <Dashboard />
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
