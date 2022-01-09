import React, { FC, useReducer } from "react";

export interface SportProps {
  idSport?: string;
  strFormat?: string;
  strSport?: string;
  strSportDescription?: string;
  strSportIconGreen?: string;
  strSportThumb?: string;
  userLiked?: boolean;
}
export interface SportsContextProps {
  sportsList: SportProps[];
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

export const SportsProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SportsContext.Provider value={{ state, dispatch }}>
      {children}
    </SportsContext.Provider>
  );
};
