import {FC} from "react";
import {Button} from "../Button/Button";
import styles from "./Counter.module.css";

type CounterPropsType = {
  minValue: number
  maxValue: number
  currentValue: number
  setCurrentValue: (value: number) => void
};

export const Counter: FC<CounterPropsType> = (
  {minValue, maxValue, currentValue, setCurrentValue}
) => {
  const increaseHandler = () => {
    if (currentValue < maxValue) {
      setCurrentValue(currentValue + 1);
    }
  };

  const resetHandler = () => {
    setCurrentValue(minValue);
  };

  const counterOutputClassName = currentValue === maxValue
      ? `${styles.counterOutput} ${styles.maxValue}`
      : styles.counterOutput;

  return (
    <div className={styles.counterContainer}>
      <div className={counterOutputClassName}>
        {currentValue}
      </div>
      <div className={styles.buttonsContainer}>
        <Button
          title={"Inc"}
          disabled={currentValue === maxValue}
          callback={increaseHandler}
        />
        <Button
          title={"Reset"}
          disabled={currentValue === minValue}
          callback={resetHandler}
        />
      </div>
    </div>
  );
};