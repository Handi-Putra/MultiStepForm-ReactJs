import React, { useContext } from 'react'
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

function FirstStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  const handleNext = () => {
    if (userData.firstName && userData.lastName && userData.contact) {
      setStep(2);
    } else {
      alert("Please fill all the required fields");
    }
  };

  return (
    <div>
        <div>
            <TextField label="First Name" value={userData['firstName']} onChange={(e) => setUserData({...userData, "firstName" : e.target.value})} margin="normal" varient="outlined" color="secondary" required />
        </div>
        <div>
            <TextField label="Last Name" value={userData['lastName']} onChange={(e) => setUserData({...userData, "lastName" : e.target.value})} margin="normal" varient="outlined" color="secondary" required />
        </div>
        <div>
            <TextField label="Phone Number" value={userData['contact']} onChange={(e) => setUserData({...userData, "contact" : e.target.value})} margin="normal" varient="outlined" color="secondary" required />
        </div>
        <div>
            <Button varient="contained" color="primary" onClick={handleNext}>Next</Button>
            {/* <Button varient="contained" color="primary" onClick={() => setStep(2)}>Next</Button> */}
        </div>
    </div>
  )
}

export default FirstStep