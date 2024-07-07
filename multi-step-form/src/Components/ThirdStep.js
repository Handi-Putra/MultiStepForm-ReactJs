import React, { useContext } from 'react'
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

function ThirdStep() {
  const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);

  const handleSubmit = () => {
    if (userData.city && userData.landMark && userData.postalCode) {
      submitData();
    } else {
      alert("Please fill all the required fields");
    }
  };

  return (
    <div>
        <div>
            <TextField label="City" value={userData['city']} onChange={(e) => setUserData({...userData, "city" : e.target.value})} margin="normal" varient="outlined" color="secondary" required />
        </div>
        <div>
            <TextField label="Landmark" value={userData['landMark']} onChange={(e) => setUserData({...userData, "landMark" : e.target.value})} margin="normal" varient="outlined" color="secondary" required />
        </div>
        <div>
            <TextField label="Postal Code" value={userData['postalCode']} onChange={(e) => setUserData({...userData, "postalCode" : e.target.value})} margin="normal" varient="outlined" color="secondary" required />
        </div>
        <div>
            <Button varient="contained" color="secondary" onClick={() => setStep(2)}>Back</Button><span> </span>
            <Button varient="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        </div>
    </div>
  )
}

export default ThirdStep