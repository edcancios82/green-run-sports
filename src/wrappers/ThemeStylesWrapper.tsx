import { useContext, useEffect, useState } from "react";
import { ThemeProvider as ThemeStylesProvider } from "styled-components";
import { myDarkTheme, myLightTheme } from "../constants/myTheme";
import { ThemeContext } from "../contexts";
import { Router } from "../routes/Router";

export const ThemeStylesWrapper = () => {
  const { state } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setDarkMode(state?.mode === "dark");
  }, [state]);

  return (
    <ThemeStylesProvider theme={darkMode ? myDarkTheme : myLightTheme}>
      <Router />
    </ThemeStylesProvider>
  );
};
