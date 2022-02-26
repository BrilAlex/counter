import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {
  const minValue = 0;
  const maxValue = 5;

  const [currentValue, setCurrentValue] = useState<number>(minValue);

  return (
    <div className="App">
      <Counter
        minValue={minValue}
        maxValue={maxValue}
        currentValue={currentValue}
        setCurrentValue={setCurrentValue}
      />
    </div>
  );
}

export default App;
