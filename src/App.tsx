import {useState} from 'react';
import './App.css';
import {CounterOutput} from "./components/CounterOutput/CounterOutput";
import {Button} from "./components/Button/Button";

function App() {
  const startValue: number = 0;
  const maxValue: number = 5;

  const [counterValue, setCounterValue] = useState<number>(startValue);
  // const
  let resetDisabled = counterValue === startValue;
  let increaseDisabled = !(counterValue < maxValue);

  const increaseCounter = () => {
    if (counterValue < maxValue) {
      setCounterValue(counterValue => counterValue + 1);
    }
  }

  const resetCounter = () => {
    setCounterValue(startValue);
  }

  return (
      <div className="appContainer">
        <div className="counterContainer">
          <CounterOutput
              counterValue={counterValue}
              maxValue={maxValue}
          />
          <div className="buttonsContainer">
            <Button
                buttonTitle={"Inc"}
                callback={increaseCounter}
                disabled={increaseDisabled}
            />
            <Button
                buttonTitle={"Reset"}
                callback={resetCounter}
                disabled={resetDisabled}
            />
          </div>
          {counterValue === maxValue && (
              <div className={"warningMessage"}>
                You reached counter max value.
                <br/>
                Please, press "Reset" button
              </div>
          )}
        </div>
      </div>
  );
}

export default App;
