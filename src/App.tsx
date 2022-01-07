import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { myDarkTheme, myLightTheme } from "./constants/myTheme";
import { axiosGet } from "./api/axiosRequest";
import { Router } from "./routes/Router";

const App = () => {
  const [theme, setTheme] = useState(myLightTheme);

  const handleDarkMode = () =>
    setTheme(theme === myLightTheme ? myDarkTheme : myLightTheme);

  const handleAxios = () => axiosGet();

  return (
    <ThemeProvider theme={theme}>
      <>
        <button onClick={handleDarkMode}>Toggle Theme</button>
        <button onClick={handleAxios}>Axios call</button>
        <Router />
      </>
    </ThemeProvider>
  );
};

export default App;
