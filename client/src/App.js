import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/routing/PrivateRoute";

import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <PrivateRoute exact path="/" component={<PrivateScreen />} /> */}
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
          <Route
            path="/passwordreset/:resetToken"
            element={<ResetPasswordScreen />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
