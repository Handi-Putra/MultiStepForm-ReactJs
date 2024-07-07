import React, { useState } from 'react'
import App from './App';

export const multiStepContext = React.createContext();
const StepContext = ({ children }) => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const submitData1 = () => {
    console.log('User Data Submitted: ', userData);
  }

  function submitData() {
    setFinalData(finalData => [...finalData, userData]);
    setUserData('');
    setStep(1);
  }

  return (
    <div>
        <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData, submitData1}}>
            <App />
        </multiStepContext.Provider>
    </div>
  )
}

export default StepContext