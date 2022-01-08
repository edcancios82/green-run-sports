import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "../contexts";
import { Home, Login, PrivateHome } from "../pages";

export const Router = () => {
  const { state: stateUser } = useContext(UserContext);
  return (
    <BrowserRouter>
      {!stateUser.uid ? (
        <Routes>
          <Route path="*" element={<PrivateHome />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
