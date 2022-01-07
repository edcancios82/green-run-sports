import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
