import React, { FC, useReducer } from "react";

interface UserContextProps {
  uid: string;
}

const initialState = { uid: "" };

export const UserContext = React.createContext<{
  state: UserContextProps;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: UserContextProps, action: any) => {
  switch (action.type) {
    case "setUserData":
      return { ...state, uid: action.uid };
    case "clear":
      return { uid: "" };
    default:
      throw new Error("Unexpected action");
  }
};

export const UserProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
