import React from "react";
import { useState } from "react";
import "./claimsForm/ClaimsForm.css";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Button, TextField, RadioGroup, Radio} from "@mui/material";


  
  
const UpdateClaim = (props) => {
  const [firstName, setFirstName] = useState({
    value: "",
    error: false,
  });
  
  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault();
  };

  const navigateToDashboard = () => {
    navigate('/');}
  const navigate = useNavigate();

  const [lastName, setLastName] = useState({
    value: "",
    error: false,
  });
  const [claimAmt, setClaimAmt] = useState({
    value: "",
    error: false,
  });
  const [projectId, setProjectId] = useState({
    value: "",
    error: false,
  });
  const [myFollowUpRadioVal, setMyFollowUpRadioVal] = useState({
    value: "No",
    error: false,
  });
  const [prevClaimId, setPrevClaimId] = useState({
    value: "",
    error: false,
  });
  const onFirstNameChangeHandler = (e) => {
    const firstNameValue = e.target.value;
    setFirstName({ ...firstName, value: firstNameValue });
  };
  const onLastNameChangeHandler = (e) => {
    const lastNameValue = e.target.value;
    setLastName({ ...lastName, value: lastNameValue });
  };
  const onClaimAmtChangeHandler = (e) => {
    const claimAmtValue = e.target.value;
    setClaimAmt({ ...claimAmt, value: claimAmtValue });
  };
  const onProjectIdChangeHandler = (e) => {
    const projectIdVal = e.target.value;
    setProjectId({ ...projectId, value: projectIdVal });
  };
  const onMyFollowUpHandler = (e) => {
    setMyFollowUpRadioVal({ ...myFollowUpRadioVal, value: e.target.value });
  };

  const onPrevClaimHandler = (e) => {
    setPrevClaimId({ ...prevClaimId, value: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (firstName.value === "") {
      setFirstName({ ...firstName, error: true });
    }
    if (lastName.value === "") {
      setLastName({ ...lastName, error: true });
    }
    if (claimAmt.value === "") {
      setClaimAmt({ ...claimAmt, error: true });
    }
    if (projectId.value === "") {
      setProjectId({ ...projectId, error: true });
    }
  };
  return (
    <form className="form" onSubmit={onSubmitHandler, handleSubmit}>
      <TextField
        label="First Name"
        color="secondary"
        value={firstName.value}
        onChange={onFirstNameChangeHandler}
        error={firstName.error}
      />
      <TextField
        label="Last Name"
        color="secondary"
        value={lastName.value}
        onChange={onLastNameChangeHandler}
        error={lastName.error}
      />
      <TextField
        label="Claim Amount"
        color="secondary"
        value={claimAmt.value}
        onChange={onClaimAmtChangeHandler}
        error={claimAmt.error}
      />
      <TextField
        label="Project ID"
        color="secondary"
        value={projectId.value}
        onChange={onProjectIdChangeHandler}
        error={projectId.error}
        
      />
      <label>Is this a follow up?</label>
      <RadioGroup row defaultValue={myFollowUpRadioVal.value} onChange={onMyFollowUpHandler}>
        <label>Yes<Radio value="Yes"/></label>
        <label>No<Radio value="No"/></label>
      </RadioGroup>
      <TextField
        disabled={myFollowUpRadioVal.value === "No" && true}
        label="Prev Claim ID"
        color="secondary"
        value={prevClaimId.value}
        onChange={onPrevClaimHandler}
        error={prevClaimId.error}
      />

      
      <Button type="submit" variant="contained" onClick={navigateToDashboard, handleSubmit} >
        Update
      </Button>

      {/* If yes, enable field below */}
    </form>
  );
  
};
export default UpdateClaim;
