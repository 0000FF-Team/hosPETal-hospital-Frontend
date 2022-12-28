import React from "react";
import "./App.css";
import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signUp";
import SignUpStepsPage from "./pages/signUp/steps";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup_steps" element={<SignUpStepsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
