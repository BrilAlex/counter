import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import s from "./CounterContainer.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {
  displayMessageAC, getSettingsFromLocalStorageTC,
  increaseValueAC,
  resetValueAC,
  saveSettingsTC,
  setMaxValueAC,
  setMinValueAC
} from "../../bll/counterReducer";
import {Button} from "../Button/Button";

export const CounterContainer: FC = () => {
  const currentValue = useSelector<AppStateType, number>(state => state.counter.currentValue);
  const displayMessage = useSelector<AppStateType, string>(state => state.counter.displayMessage);
  const minValue = useSelector<AppStateType, number>(state => state.counter.minValue);
  const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
  const dispatch = useDispatch();

  const [withSettingsMode, setWithSettingsMode] = useState(false);

  const toggleCounterMode = () => {
    setWithSettingsMode(!withSettingsMode);
  };

  const [settingsMode, setSettingsMode] = useState(false);

  const activateSettings = () => {
    setSettingsMode(true);
  };

  useEffect(() => {
    dispatch(getSettingsFromLocalStorageTC());
  }, []);

  const displayValue = displayMessage ? displayMessage : currentValue;

  const settingInProgress = displayMessage !== "" || settingsMode;

  const changeValueInSettings = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.valueAsNumber;
    const inputName = e.currentTarget.name;

    dispatch(displayMessageAC("Enter values and press 'Set'"));

    if (inputName === "minValue") {
      if (newValue >= maxValue || newValue < 0) {
        dispatch(displayMessageAC("Incorrect value!"));
      }
      dispatch(setMinValueAC(newValue));
    }
    if (inputName === "maxValue") {
      if (minValue >= newValue || newValue <= 0) {
        dispatch(displayMessageAC("Incorrect value!"));
      }
      dispatch(setMaxValueAC(newValue));
    }
  };

  const saveSettings = () => {
    dispatch(saveSettingsTC(minValue, maxValue));
    setSettingsMode(false);
  };

  const increaseValue = () => {
    if (currentValue < maxValue) {
      dispatch(increaseValueAC());
    }
  };

  const resetValue = () => {
    dispatch(resetValueAC());
  };

  return (
    <>
      <Button title={"Switch mode"} callback={toggleCounterMode} disabled={settingInProgress}/>
      {
        withSettingsMode ?
          <div className={s.counterContainer}>
            <Settings
              minValue={minValue}
              maxValue={maxValue}
              currentValue={displayValue}
              changeValue={changeValueInSettings}
              saveSettings={saveSettings}
            />
            <Counter
              minValue={minValue}
              maxValue={maxValue}
              currentValue={displayValue}
              increaseValue={increaseValue}
              resetValue={resetValue}
            />
          </div>
          :
          <div className={s.counterContainer}>
            {
              settingsMode ?
                <Settings
                  minValue={minValue}
                  maxValue={maxValue}
                  changeValue={changeValueInSettings}
                  saveSettings={saveSettings}
                />
                :
                <Counter
                  minValue={minValue}
                  maxValue={maxValue}
                  currentValue={currentValue}
                  increaseValue={increaseValue}
                  resetValue={resetValue}
                  showSettings={activateSettings}
                />
            }
          </div>
      }
    </>
  );
};