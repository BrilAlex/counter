import {ChangeEvent, FC} from "react";
import {Button} from "../Button/Button";
import s from "./CounterContainer.module.css";
import {InputNumber} from "../InputNumber/InputNumber";

type SettingsPropsType = {
  minValue: number
  maxValue: number
  currentValue: number | string
  changeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
  changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
  saveSettings: () => void
};

export const Settings: FC<SettingsPropsType> = (props) => {
  const {
    minValue,
    maxValue,
    currentValue,
    changeMinValue,
    changeMaxValue,
    saveSettings
  } = props;

  const setButtonDisabled =
    typeof currentValue === "number" || minValue >= maxValue || minValue < 0;
  const minInputError = minValue >= maxValue || minValue < 0;
  const maxInputError = minValue >= maxValue;

  return (
    <div className={s.counterBlock}>
      <div className={s.displayBlock}>
        <InputNumber
          labelSpan={"Max value:"}
          name={"maxValue"}
          value={maxValue}
          onChange={changeMaxValue}
          error={maxInputError}
        />
        <InputNumber
          labelSpan={"Min value:"}
          name={"minValue"}
          value={minValue}
          onChange={changeMinValue}
          error={minInputError}
        />
      </div>
      <div className={s.buttonsContainer}>
        <Button title={"Set"} callback={saveSettings} disabled={setButtonDisabled}/>
      </div>
    </div>
  );
};