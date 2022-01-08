import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "../contexts";
import { Home, Login, PrivateHome } from "../pages";
import { PrivateLayout } from "../components";

export const Router = () => {
  const { state: stateUser } = useContext(UserContext);
  return (
    <BrowserRouter>
      {!stateUser.uid ? (
        <PrivateLayout>
          <Routes>
            <Route path="*" element={<PrivateHome />} />
          </Routes>
        </PrivateLayout>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
