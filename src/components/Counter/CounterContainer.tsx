import {ChangeEvent, FC} from "react";
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import s from "./CounterContainer.module.css";

type CounterContainerPropsType = {
  minValue: number
  maxValue: number
  currentValue: number | string
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  setCurrentValue: (value: number | string) => void
  saveSettingsToLS: () => void
};

export const CounterContainer: FC<CounterContainerPropsType> = (props) => {
  const {
    minValue,
    maxValue,
    currentValue,
    setMinValue,
    setMaxValue,
    setCurrentValue,
    saveSettingsToLS
  } = props;

  const changeValueInSettings = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.valueAsNumber;
    const inputName = e.currentTarget.name;

    setCurrentValue("Enter values and press 'Set'");

    if (inputName === "minValue") {
      if (newValue >= maxValue || newValue < 0) {
        setCurrentValue("Incorrect value!");
      }
      setMinValue(newValue);
    }
    if (inputName === "maxValue") {
      if (minValue >= newValue || minValue < 0) {
        setCurrentValue("Incorrect value!");
      }
      setMaxValue(newValue);
    }
  };

  const saveSettings = () => {
    setCurrentValue(minValue);
    saveSettingsToLS();
  };

  const increaseValue = () => {
    if (currentValue < maxValue && typeof currentValue === "number") {
      setCurrentValue(currentValue + 1);
    }
  };

  const resetValue = () => {
    setCurrentValue(minValue);
  };

  return (
    <div className={s.counterContainer}>
      <Settings
        minValue={minValue}
        maxValue={maxValue}
        currentValue={currentValue}
        changeMinValue={changeValueInSettings}
        changeMaxValue={changeValueInSettings}
        saveSettings={saveSettings}
      />
      <Counter
        minValue={minValue}
        maxValue={maxValue}
        currentValue={currentValue}
        increaseValue={increaseValue}
        resetValue={resetValue}
      />
    </div>
  );
};