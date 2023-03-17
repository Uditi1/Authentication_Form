import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [error, seterror] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const registerHandler = (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setconfirmpassword("");
      setTimeout(() => {
        seterror("");
      }, 5000);
      return seterror("Password do not match");
    }

    try {
      const here = async (data) =>
        await axios.post(
          "/api/auth/register",
          { username, email, password },
          config
        );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      seterror(error.response.data.error);
      setTimeout(() => {
        seterror("")
      },5000)
    }
  };

  return (
    <div className="register-screen">
      <form onSubmit={registerHandler} className="register-screen__form">
        {error && <span className="error-message">{error}</span>}
        <h3 className="regiser-screen__title">Register</h3>
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Enter Password"
            value={confirmpassword}
            onChange={(e) => setconfirmpassword(e.target.value)}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>

        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterScreen;
