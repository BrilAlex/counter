import {FC} from "react";
import styles from "./Counter.module.css";
import {Button} from "../Button/Button";

type CounterPropsType = {
  counterValue: number
  setCounterValue: (counterValue: number) => void
  maxValue: number
  minValue: number
};

export const Counter: FC<CounterPropsType> = (props) => {
  const {counterValue, setCounterValue, maxValue, minValue} = props;
  const incDisabled = counterValue === maxValue;
  const resetDisabled = counterValue === minValue;
  const onClickIncHandler = () => {
    if(counterValue < maxValue) {
      setCounterValue(counterValue + 1);
    }
  };
  const onClickResetHandler = () => {
    setCounterValue(minValue);
  };
  const getDisplayOutputClassName = () => counterValue === maxValue
      ?
      `${styles.displayOutput} ${styles.maxValue}`
      :
      styles.displayOutput;

  return(
    <div className={styles.counterContainer}>
      <div className={getDisplayOutputClassName()}>
        {props.counterValue}
      </div>
      <div className={styles.controlButtons}>
        <Button
          title={"Inc"}
          callback={onClickIncHandler}
          disabled={incDisabled}
        />
        <Button
          title={"Reset"}
          callback={onClickResetHandler}
          disabled={resetDisabled}
        />
      </div>
    </div>
  );
};