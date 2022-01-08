import { DefaultTheme } from "styled-components";

const myLightTheme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    main: "#F3F3F3",
    primary: "#FFFFFF",
    secondary: "#161617",
    tertiary: "#FFFFFF",
  },
};

const myDarkTheme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    main: "#2C2B3E",
    primary: "#2C2B3E",
    secondary: "white",
    tertiary: "#2F2F43",
  },
};

export { myLightTheme, myDarkTheme };
