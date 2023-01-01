import React from "react";
import "./App.css";
import "./styles/global.scss";
import "./styles/variables.scss";
import "./styles/commons.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signUp";
import SignUpStepsPage from "./pages/signUp/steps";
import MainPage from "./pages/main";
import InformationPage from "./pages/information/index";
import ReservationPage from "./pages/reservation/index";
import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup_steps" element={<SignUpStepsPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
