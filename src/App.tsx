import {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {CounterOutput} from "./components/CounterOutput/CounterOutput";
import {Button} from "./components/Button/Button";
import {SettingsOutput} from "./components/SettingsOutput/SettingsOutput";

function App() {
    const [startValue, setStartValue] =  useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [settingsMode, setSettingsMode] = useState<boolean>(false);
    const [counterValue, setCounterValue] = useState<number>(startValue);
    const [inputError, setInputError] = useState<boolean>(false);

    useEffect(() => {
        let startValueInLS = localStorage.getItem("counterStartValue");
        let maxValueInLS = localStorage.getItem("counterMaxValue");
        if (startValueInLS) {
            setStartValue(JSON.parse(startValueInLS));
            setCounterValue(JSON.parse(startValueInLS));
        }
        if (maxValueInLS) {
            setMaxValue(JSON.parse(maxValueInLS));
        }
    }, []);

    useEffect(() => {
        if (startValue >= maxValue || startValue < 0) {
            setInputError(true);
            console.log("value is incorrect");
        } else {
            setInputError(false);
            localStorage.setItem("counterStartValue", JSON.stringify(startValue));
            localStorage.setItem("counterMaxValue", JSON.stringify(maxValue));
        }
    }, [startValue, maxValue]);

    let resetDisabled = counterValue === startValue || settingsMode;
    let increaseDisabled = counterValue === maxValue || settingsMode;
    let setDisabled = !settingsMode;

    const increaseCounter = () => {
        if (counterValue < maxValue) {
            setCounterValue(counterValue => counterValue + 1);
        }
    }

    const resetCounter = () => {
        setCounterValue(startValue);
    }

    const changeSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSettingsMode(true);
        let currentValue = Number(e.currentTarget.value);
        
        switch (e.currentTarget.name) {
            case "startValue":
                setStartValue(currentValue);
                break;
            case "maxValue":
                setMaxValue(currentValue);
                break;
        }
    }

    const setHandler = () => {
        if (!inputError) {
            setCounterValue(startValue);
            setSettingsMode(false);
        }
    }

    return (
        <div className="appContainer">
            <div className="counterContainer">
                <SettingsOutput
                    startValue={startValue}
                    maxValue={maxValue}
                    changeSettingsCallback={changeSettingsHandler}
                />
                <div className="buttonsContainer">
                    <Button
                        buttonTitle={"Set"}
                        callback={setHandler}
                        disabled={setDisabled}
                    />
                </div>
            </div>
            <div className="counterContainer">
                <CounterOutput
                    counterValue={counterValue}
                    maxValue={maxValue}
                    settingsModeIsOn={settingsMode}
                    inputError={inputError}
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
                {counterValue === maxValue && !settingsMode && (
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
