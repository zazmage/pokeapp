import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../components/MainPage";
import React from "react";
import PokeInfo from "../components/PokeInfo";

export const DashboardRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/pokeInfo">
            <Route path=":pokeName" element={<PokeInfo />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};
