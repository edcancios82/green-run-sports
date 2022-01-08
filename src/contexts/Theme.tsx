import React, { FC, useReducer } from "react";

interface ThemeContextProps {
  mode?: string;
}

const initialState = { mode: "light" };

export const ThemeContext = React.createContext<{
  state: ThemeContextProps;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: ThemeContextProps, action: any) => {
  switch (action.type) {
    case "toggleThemeMode":
      return { ...state, mode: action.mode };
    default:
      throw new Error("Unexpected action");
  }
};

export const ThemeProvider: FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
