import { DefaultTheme } from "styled-components";

const myLightTheme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    main: "#FBFBFB",
    primary: "#FFFFFF",
    secondary: "#161617",
    tertiary: "#FFFFFF",
  },
};

const myDarkTheme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    main: "#1F1F31",
    primary: "#2C2B3E",
    secondary: "white",
    tertiary: "#2F2F43",
  },
};

export { myLightTheme, myDarkTheme };
