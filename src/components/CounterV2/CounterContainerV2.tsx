import {ChangeEvent, FC, useState} from "react";
import {CounterV2} from "./CounterV2";
import {SettingsV2} from "./SettingsV2";
import s from "../Counter/CounterContainer.module.css";


type CounterContainerV2PropsType = {
  minValue: number
  maxValue: number
  currentValue: number
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  setCurrentValue: (value: number) => void
  saveState: (minValue: number, maxValue: number) => void
};

export const CounterContainerV2: FC<CounterContainerV2PropsType> = (props) => {
  const {
    minValue,
    maxValue,
    currentValue,
    setMinValue,
    setMaxValue,
    setCurrentValue,
    saveState
  } = props;

  const [settingsMode, setSettingsMode] = useState(false);

  const changeValueInSettings = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.valueAsNumber;
    const inputName = e.currentTarget.name;

    if (inputName === "minValue") {
      setMinValue(newValue);
    }
    if (inputName === "maxValue") {
      setMaxValue(newValue);
    }
  };

  const saveSettings = () => {
    setCurrentValue(minValue);
    saveState(minValue, maxValue);
    setSettingsMode(false);
  };

  const activateSettings = () => {
    setSettingsMode(true);
  };

  const increaseValue = () => {
    if (currentValue < maxValue) {
      setCurrentValue(currentValue + 1);
    }
  };

  const resetValue = () => {
    setCurrentValue(minValue);
  };

  return (
    <div className={s.counterContainer}>
      {settingsMode ?
        <SettingsV2
          minValue={minValue}
          maxValue={maxValue}
          changeMinValue={changeValueInSettings}
          changeMaxValue={changeValueInSettings}
          saveSettings={saveSettings}
        />
        :
        <CounterV2
          minValue={minValue}
          maxValue={maxValue}
          currentValue={currentValue}
          increaseValue={increaseValue}
          resetValue={resetValue}
          showSettings={activateSettings}
        />
      }
    </div>
  );
};