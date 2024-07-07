import React, { useContext } from 'react'
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

function SecondStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  const handleNext = () => {
    if (userData.email && userData.country && userData.district) {
      setStep(3);
    } else {
      alert("Please fill all the required fields");
    }
  };

  return (
    <div>
        <div>
            <TextField label="Email" value={userData['email']} onChange={(e) => setUserData({...userData, "email" : e.target.value})} margin="normal" varient="outlined" color="secondary" required />
        </div>
        <div>
            <TextField label="Country" value={userData['country']} onChange={(e) => setUserData({...userData, "country" : e.target.value})} margin="normal" varient="outlined" color="secondary" required />
        </div>
        <div>
            <TextField label="District" value={userData['district']} onChange={(e) => setUserData({...userData, "district" : e.target.value})} margin="normal" varient="outlined" color="secondary" required />
        </div>
        <div>
            <Button varient="contained" color="secondary" onClick={() => setStep(1)}>Back</Button><span> </span>
            <Button varient="contained" color="primary" onClick={handleNext}>Next</Button>
        </div>
    </div>
  )
}

export default SecondStep