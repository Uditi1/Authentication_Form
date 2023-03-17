import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PrivateRoute from './components/routing/PrivateRoute'

import LoginScreen from './components/screens/LoginScreen'
import RegisterScreen from './components/screens/RegisterScreen'
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen'
import ResetPasswordScreen from './components/screens/ResetPasswordScreen'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" Component={LoginScreen} />
          <Route exact path="/register" Component={RegisterScreen} />
          <Route exact path="/forgotpassword" Component={ForgotPasswordScreen} />
          <Route exact path="/passwordreset/:resetToken" Component={ResetPasswordScreen} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
