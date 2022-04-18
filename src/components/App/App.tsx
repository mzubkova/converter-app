import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../MainLayout";
import NavBar from "../NavBar";
import CurrencyList from "../CurrencyList";

const App = ({ exchange_rates }) => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
      <Route
        path="/currency_list"
        element={<CurrencyList exchange_rates={exchange_rates} />}
      ></Route>
    </Routes>
  </>
);

export default App;
