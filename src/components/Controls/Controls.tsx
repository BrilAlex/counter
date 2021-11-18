import {FC} from "react";
import styles from "../Counter/Counter.module.css";
import {Button} from "../Button/Button";

type ControlsPropsType = {
  counterValue: number
  minValue: number
  maxValue: number
  settingsMode: boolean
  inputError: boolean
  setCounterValue: (value: number) => void
};

export const Controls: FC<ControlsPropsType> = (
  {
    counterValue,
    minValue,
    maxValue,
    settingsMode,
    inputError,
    setCounterValue
  }
) => {
  const incDisabled = counterValue === maxValue || settingsMode;
  const resetDisabled = counterValue === minValue || settingsMode;

  const increaseCounter = () => {
    if (counterValue < maxValue) {
      setCounterValue(counterValue + 1);
    }
  };
  const resetCounter = () => {
    setCounterValue(minValue);
  };

  const getDisplayOutputClassName = () => counterValue === maxValue && !inputError
    ? `${styles.displayOutput} ${styles.maxValue}`
    : styles.displayOutput;

  const getCounterDisplayOutputValue = () => !settingsMode
    ? counterValue
    : !inputError ? "Press Set button" : "Input error";

  return (
    <div className={styles.counterBlock}>
      <div className={getDisplayOutputClassName()}>
        {getCounterDisplayOutputValue()}
      </div>
      <div className={styles.controlButtons}>
        <Button
          title={"Inc"}
          callback={increaseCounter}
          disabled={incDisabled}
        />
        <Button
          title={"Reset"}
          callback={resetCounter}
          disabled={resetDisabled}
        />
      </div>
    </div>
  );
};