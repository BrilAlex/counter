import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterContainer} from "./components/Counter/CounterContainer";
import {restoreValueFromLS, saveValueToLS} from "./localStorage/localStorage";
import {CounterContainerV2} from "./components/CounterV2/CounterContainerV2";
import {Button} from "./components/Button/Button";

function App() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);
  const [currentValue, setCurrentValue] = useState<number | string>(minValue);

  const [minValueV2, setMinValueV2] = useState(0);
  const [maxValueV2, setMaxValueV2] = useState(5);
  const [currentValueV2, setCurrentValueV2] = useState<number>(minValueV2);

  const [withSettingsMode, setWithSettingsMode] = useState(false);

  useEffect(() => {
    setMinValue(restoreValueFromLS("counter_minValue", 0));
    setCurrentValue(restoreValueFromLS("counter_minValue", 0));
    setMaxValue(restoreValueFromLS("counter_maxValue", 5));

    setMinValueV2(restoreValueFromLS("counterV2_minValue", 0));
    setCurrentValueV2(restoreValueFromLS("counterV2_minValue", 0));
    setMaxValueV2(restoreValueFromLS("counterV2_maxValue", 5));
  }, []);

  const saveState = (minValue: number, maxValue: number) => {
    saveValueToLS("counter_minValue", minValue);
    saveValueToLS("counter_maxValue", maxValue);
  };

  const saveStateV2 = (minValue: number, maxValue: number) => {
    saveValueToLS("counterV2_minValue", minValue);
    saveValueToLS("counterV2_maxValue", maxValue);
  };

  const toggleCounterMode = () => {
    setWithSettingsMode(!withSettingsMode);
  };

  return (
    <div className="App">
      <Button title={"Switch mode"} callback={toggleCounterMode}/>
      {withSettingsMode ?
        <CounterContainer
          minValue={minValue}
          maxValue={maxValue}
          currentValue={currentValue}
          setMinValue={setMinValue}
          setMaxValue={setMaxValue}
          setCurrentValue={setCurrentValue}
          saveState={saveState}
        />
        :
        <CounterContainerV2
          minValue={minValueV2}
          maxValue={maxValueV2}
          currentValue={currentValueV2}
          setMinValue={setMinValueV2}
          setMaxValue={setMaxValueV2}
          setCurrentValue={setCurrentValueV2}
          saveState={saveStateV2}
        />}
    </div>
  );
}

export default App;
