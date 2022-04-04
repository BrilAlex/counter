import {FC} from "react";
import {Button} from "../Button/Button";
import s from "./CounterContainer.module.css";

type CounterPropsType = {
  minValue: number
  maxValue: number
  currentValue: number | string
  increaseValue: () => void
  resetValue: () => void
  showSettings?: () => void
};

export const Counter: FC<CounterPropsType> = (props) => {
  const {minValue, maxValue, currentValue, increaseValue, resetValue, showSettings} = props;

  const settingsStyle = currentValue === "Incorrect value!" ?
    `${s.settingsDisplay} ${s.error}` : s.settingsDisplay;

  const counterStyle = currentValue === maxValue ?
    `${s.counterDisplay} ${s.error} ${s.maxValue}` : s.counterDisplay;

  const displayStyle = typeof currentValue === "string" ? settingsStyle : counterStyle;

  const counterOutputClassName = `${s.displayBlock} ${displayStyle}`;

  const incButtonDisabled = currentValue === maxValue || typeof currentValue === "string";
  const resetButtonDisabled = currentValue === minValue || typeof currentValue == "string";

  return (
    <div className={s.counterBlock}>
      <div className={counterOutputClassName}>
        {currentValue}
      </div>
      <div className={s.buttonsContainer}>
        <Button title={"Inc"} callback={increaseValue} disabled={incButtonDisabled}/>
        <Button title={"Reset"} callback={resetValue} disabled={resetButtonDisabled}/>
        {showSettings && <Button title={"Set"} callback={showSettings}/>}
      </div>
    </div>
  );
};