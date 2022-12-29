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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup_steps" element={<SignUpStepsPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
