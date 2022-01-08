import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "../contexts";
import { Home, Login, PrivateHome, History } from "../pages";
import { PrivateLayout } from "../components";
import { SportsProvider } from "../contexts";

export const Router = () => {
  const { state: stateUser } = useContext(UserContext);
  return (
    <BrowserRouter>
      {stateUser.uid ? (
        <SportsProvider>
          <PrivateLayout>
            <Routes>
              <Route path="/history" element={<History />} />
              <Route path="*" element={<PrivateHome />} />
            </Routes>
          </PrivateLayout>
        </SportsProvider>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
