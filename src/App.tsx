import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {
  const [counterValue, setCounterValue] = useState<number>(0);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(5);
  const [settingsMode, setSettingsMode] = useState<boolean>(false);
  const [inputError, setInputError] = useState<boolean>(false);

  return (
    <div className="App">
      <Counter
        counterValue={counterValue}
        minValue={minValue}
        maxValue={maxValue}
        settingsMode={settingsMode}
        inputError={inputError}
        setCounterValue={setCounterValue}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        setSettingsMode={setSettingsMode}
        setInputError={setInputError}
      />
    </div>
  );
}

export default App;
