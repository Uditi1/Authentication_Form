import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const PrivateScreen = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      Navigate.push("/login");
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };
    fetchPrivateData();
  }, [Navigate]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    Navigate.push("/login")
  }

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
      <div style={{background: "green", color: "white"}}>{privateData}</div>

      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default PrivateScreen;
