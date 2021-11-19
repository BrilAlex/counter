import {useEffect} from "react";
import styles from "./Counter.module.css";
import {Controls} from "../Controls/Controls";
import {Settings} from "../Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {
  increaseValueAC,
  InitialStateType, resetValueAC, saveValuesToLocalStorageTC,
  setInputErrorAC, setMaxValueAC, setMinValueAC,
  setSettingsModeAC, setValueFromLocalStorageTC
} from "../../bll/counterReducer";

export const Counter = () => {
  const state = useSelector<AppStateType, InitialStateType>(state =>
    state.counter);
  const dispatch = useDispatch();
  const counterValue = state.counterValue;
  const minValue = state.minValue;
  const maxValue = state.maxValue;
  const settingsMode = state.settingsMode;
  const inputError = state.inputError;

  useEffect(() => {
    dispatch(setValueFromLocalStorageTC());
  }, []);

  useEffect(() => {
    if (minValue >= maxValue || minValue < 0) {
      dispatch(setInputErrorAC(true));
    } else {
      dispatch(setInputErrorAC(false));
      dispatch(saveValuesToLocalStorageTC());
    }
  }, [minValue, maxValue]);

  const increaseValue = () => {
    dispatch(increaseValueAC());
  };
  const resetValue = () => {
    dispatch(resetValueAC());
  };
  const setMinValue = (value: number) => {
    dispatch(setMinValueAC(value));
  };
  const setMaxValue = (value: number) => {
    dispatch(setMaxValueAC(value));
  };
  const setSettingsMode = (value: boolean) => {
    dispatch(resetValueAC());
    dispatch(setSettingsModeAC(value));
  };

  return (
    <div className={styles.counterContainer}>
      <Settings
        minValue={minValue}
        maxValue={maxValue}
        settingsMode={settingsMode}
        inputError={inputError}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        setSettingsMode={setSettingsMode}
      />
      <Controls
        minValue={minValue}
        maxValue={maxValue}
        counterValue={counterValue}
        settingsMode={settingsMode}
        inputError={inputError}
        increaseValue={increaseValue}
        resetValue={resetValue}
      />
    </div>
  );
};