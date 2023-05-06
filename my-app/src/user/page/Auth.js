import { Button } from '@mui/base';
import { TextField } from '@mui/material';
import React, { useContext, useState } from 'react';

const Auth = () => { 
    const [employeeId, setEmployeeId] = useState("")
    const [password, setPassword] = useState("")
    const [employeeIdError, setEmployeeIdError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const handleSubmit = async event => {
        event.preventDefault();
        setEmployeeIdError(false)
        setPasswordError(false)
 
        if (employeeId === '') {
            setEmployeeIdError(true)
        }
        if (password === '') {
            setPasswordError(true)
        }
 
        if (employeeId && password) {
            console.log(employeeId, password)
        }
    };
  
    return (
        <React.Fragment>
        <form onSubmit={handleSubmit}>
            <h2>Login Form</h2>
                <TextField 
                    label="EmployeeId"
                    onChange={e => setEmployeeId(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={employeeId}
                    error={employeeIdError}
                 />
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="outlined" color="secondary" type="submit">Login</Button>
        </form>
        </React.Fragment>
    );
  };

export default Auth;