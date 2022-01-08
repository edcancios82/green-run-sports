import React, { FC, useReducer } from "react";

interface SportsContextProps {
  sportsList: any[];
  sportsHistoryList: any[];
}

const initialState = { sportsList: [], sportsHistoryList: [] };

export const SportsContext = React.createContext<{
  state: SportsContextProps;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const handleOption = (
  sportsHistoryList: any[],
  sportsList: any[],
  option: boolean
) => {
  const newHistory = [...sportsHistoryList];
  newHistory.push({ ...sportsList?.[0], userLiked: option });

  const newList = [...sportsList];
  newList.shift();

  return {
    sportsList: newList,
    sportsHistoryList: newHistory,
  };
};

const reducer = (state: SportsContextProps, action: any) => {
  switch (action.type) {
    case "setSportsData":
      return { ...state, sportsList: action.sportsList };
    case "setSportsOption":
      const newData: SportsContextProps = handleOption(
        state.sportsHistoryList,
        state.sportsList,
        action.option
      );
      return { ...state, ...newData };
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
