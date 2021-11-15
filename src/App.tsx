import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {
  const [counterValue, setCounterValue] = useState<number>(0);
  const maxValue = 5;
  const minValue = 0;

  return (
    <div className="App">
      <Counter
        counterValue={counterValue}
        setCounterValue={setCounterValue}
        maxValue={maxValue}
        minValue={minValue}
      />
    </div>
  );
}

export default App;
