import './App.css';
import FirstStep from './Components/FirstStep';
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useContext } from 'react';
import { multiStepContext } from './StepContext';
import DisplayData from './Components/DisplayData';

function App() {

  const {currentStep, finalData} = useContext(multiStepContext);
  function showStep(step) {
    switch(step) {
      case 1: 
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
    }
  }

  return (
    <div className="App">
      <header className='App-header'>
        <div className='center-stepper'>
          <Stepper style={{ width: '50%' }} activeStep={currentStep - 1} orientation='horizontal'>
            <Step>
              <StepLabel></StepLabel>
            </Step>

            <Step>
              <StepLabel></StepLabel>
            </Step>

            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>

        { showStep(currentStep)}

        <br />
        <br />

        {finalData.length > 0 ? <DisplayData /> : ''}
          
      </header>
    </div>
  );
}

export default App;
