import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterContainer} from "./components/Counter/CounterContainer";

function App() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);

  const [currentValue, setCurrentValue] = useState<number | string>(minValue);

  useEffect(() => {
    const minValueInLS = localStorage.getItem("counter_minValue");
    const maxValueInLS = localStorage.getItem("counter_maxValue");
    if(minValueInLS) {
      const minValueFromLS = JSON.parse(minValueInLS);
      setMinValue(minValueFromLS);
      setCurrentValue(minValueFromLS);
    }
    if(maxValueInLS) {
      const maxValueFromLS = JSON.parse(maxValueInLS);
      setMaxValue(maxValueFromLS);
    }
  }, []);

  const saveSettingsToLS = () => {
    localStorage.setItem("counter_minValue", JSON.stringify(minValue));
    localStorage.setItem("counter_maxValue", JSON.stringify(maxValue));
  };

  return (
    <div className="App">
      <CounterContainer
        minValue={minValue}
        maxValue={maxValue}
        currentValue={currentValue}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        setCurrentValue={setCurrentValue}
        saveSettingsToLS={saveSettingsToLS}
      />
    </div>
  );
}

export default App;
