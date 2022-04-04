import {ChangeEvent, FC} from "react";
import {Button} from "../Button/Button";
import {InputNumber} from "../InputNumber/InputNumber";
import s from "./CounterContainer.module.css";

type SettingsPropsType = {
  minValue: number
  maxValue: number
  currentValue?: number | string
  changeValue: (e: ChangeEvent<HTMLInputElement>) => void
  saveSettings: () => void
};

export const Settings: FC<SettingsPropsType> = (props) => {
  const {
    minValue,
    maxValue,
    currentValue,
    changeValue,
    saveSettings
  } = props;

  const minInputError = minValue >= maxValue || minValue < 0;
  const maxInputError = minValue >= maxValue || maxValue <= 0;
  const setButtonDisabled =
    typeof currentValue === "number" || minInputError || maxInputError;

  return (
    <div className={s.counterBlock}>
      <div className={s.displayBlock}>
        <InputNumber
          labelSpan={"Max value:"}
          name={"maxValue"}
          value={maxValue}
          onChange={changeValue}
          error={maxInputError}
        />
        <InputNumber
          labelSpan={"Min value:"}
          name={"minValue"}
          value={minValue}
          onChange={changeValue}
          error={minInputError}
        />
      </div>
      <div className={s.buttonsContainer}>
        <Button title={"Set"} callback={saveSettings} disabled={setButtonDisabled}/>
      </div>
    </div>
  );
};