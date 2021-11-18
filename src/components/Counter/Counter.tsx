import {FC, useEffect} from "react";
import styles from "./Counter.module.css";
import {Controls} from "../Controls/Controls";
import {Settings} from "../Settings/Settings";

type CounterPropsType = {
  counterValue: number
  minValue: number
  maxValue: number
  settingsMode: boolean
  inputError: boolean
  setCounterValue: (value: number) => void
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  setSettingsMode: (value: boolean) => void
  setInputError: (value: boolean) => void
};

export const Counter: FC<CounterPropsType> = (
  {
    counterValue,
    minValue,
    maxValue,
    settingsMode,
    inputError,
    setCounterValue,
    setMinValue,
    setMaxValue,
    setSettingsMode,
    setInputError
  }
) => {
  useEffect(() => {
    let minValueInLS = localStorage.getItem("counterMinValue");
    let maxValueInLS = localStorage.getItem("counterMaxValue");
    if (minValueInLS) {
      setMinValue(JSON.parse(minValueInLS));
      setCounterValue(JSON.parse(minValueInLS));
    }
    if (maxValueInLS) {
      setMaxValue(JSON.parse(maxValueInLS));
    }
  }, []);

  useEffect(() => {
    if (minValue >= maxValue || minValue < 0) {
      setInputError(true);
    } else {
      setInputError(false);
      localStorage.setItem("counterMinValue", JSON.stringify(minValue));
      localStorage.setItem("counterMaxValue", JSON.stringify(maxValue));
    }
  }, [minValue, maxValue]);

  return (
    <div className={styles.counterContainer}>
      <Settings
        minValue={minValue}
        maxValue={maxValue}
        settingsMode={settingsMode}
        inputError={inputError}
        setCounterValue={setCounterValue}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        setSettingsMode={setSettingsMode}
      />
      <Controls
        counterValue={counterValue}
        minValue={minValue}
        maxValue={maxValue}
        settingsMode={settingsMode}
        inputError={inputError}
        setCounterValue={setCounterValue}
      />
    </div>
  );
};