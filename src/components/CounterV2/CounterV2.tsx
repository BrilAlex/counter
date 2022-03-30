import {FC} from "react";
import {Button} from "../Button/Button";
import s from "../Counter/CounterContainer.module.css";

type CounterV2PropsType = {
  minValue: number
  maxValue: number
  currentValue: number | string
  increaseValue: () => void
  resetValue: () => void
  showSettings: () => void
};

export const CounterV2: FC<CounterV2PropsType> = (props) => {
  const {minValue, maxValue, currentValue, increaseValue, resetValue, showSettings} = props;

  const displayStyle = currentValue ===
  maxValue ? `${s.counterDisplay} ${s.error} ${s.maxValue}` : s.counterDisplay;

  const counterOutputClassName = `${s.displayBlock} ${displayStyle}`;

  const incButtonDisabled = currentValue === maxValue;
  const resetButtonDisabled = currentValue === minValue;

  return (
    <div className={s.counterBlock}>
      <div className={counterOutputClassName}>
        {currentValue}
      </div>
      <div className={s.buttonsContainer}>
        <Button title={"Inc"} callback={increaseValue} disabled={incButtonDisabled}/>
        <Button title={"Reset"} callback={resetValue} disabled={resetButtonDisabled}/>
        <Button title={"Set"} callback={showSettings}/>
      </div>
    </div>
  );
};