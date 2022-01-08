import React, { FC, useReducer } from "react";

interface SportsContextProps {
  sportsList: any[];
}

const initialState = { sportsList: [] };

export const SportsContext = React.createContext<{
  state: SportsContextProps;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: SportsContextProps, action: any) => {
  switch (action.type) {
    case "setSportsData":
      return { ...state, sportsList: action.sportsList };
    case "removeFirstOption":
      const newList = [...state.sportsList];
      newList.shift();
      return { ...state, sportsList: newList };
    default:
      throw new Error("Unexpected action");
  }
};

export const SportsProvider: FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SportsContext.Provider value={{ state, dispatch }}>
      {children}
    </SportsContext.Provider>
  );
};
