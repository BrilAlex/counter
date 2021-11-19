import {FC} from "react";
import styles from "../Counter/Counter.module.css";
import {Button} from "../Button/Button";

type ControlsPropsType = {
  minValue: number
  maxValue: number
  counterValue: number
  settingsMode: boolean
  inputError: boolean
  increaseValue: () => void
  resetValue: () => void
};

export const Controls: FC<ControlsPropsType> = (
  {
    minValue,
    maxValue,
    counterValue,
    settingsMode,
    inputError,
    increaseValue,
    resetValue,
  }
) => {
  const incDisabled = counterValue === maxValue || settingsMode;
  const resetDisabled = counterValue === minValue || settingsMode;

  const increaseCounter = () => {
    if (counterValue < maxValue) {
      increaseValue();
    }
  };
  const resetCounter = () => {
    resetValue();
  };

  const getDisplayOutputClassName = () =>
    counterValue === maxValue && !inputError && !settingsMode
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