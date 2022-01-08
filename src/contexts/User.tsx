import React, { FC, useReducer } from "react";

interface UserContextProps {
  uid?: string | null;
}

const initialState = { uid: null };

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
      return { uid: null };
    default:
      throw new Error("Unexpected action");
  }
};

export const UserProvider: FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
