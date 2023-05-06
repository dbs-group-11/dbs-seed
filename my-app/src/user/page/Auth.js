import { TextField, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../shared/context/authContext";
import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [employeeIdError, setEmployeeIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmployeeIdError(false);
    setPasswordError(false);

    if (employeeId === "") {
      setEmployeeIdError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (employeeId && password) {
      console.log(employeeId, password);
    }

    const response = await fetch(
      `http://localhost:5000/login?employeeID=${employeeId}&password=${password}`,
      {
        method: "POST",
        body: null,
        headers: {},
      }
    );
    const responseData = await response.json();
    console.log(responseData);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="authForm">
        <h2>Login Form</h2>
        <TextField
          label="EmployeeId"
          onChange={(e) => setEmployeeId(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          className="authInput"
          value={employeeId}
          error={employeeIdError}
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          className="authInput"
          value={password}
          error={passwordError}
          sx={{ mb: 3 }}
        />
        <Button
          variant="contained"
          className="authButton"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
    </React.Fragment>
  );
};

export default Auth;
