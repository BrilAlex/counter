import {ChangeEvent, FC} from "react";
import {Button} from "../Button/Button";
import {InputNumber} from "../InputNumber/InputNumber";
import s from "../Counter/CounterContainer.module.css";

type SettingsV2PropsType = {
  minValue: number
  maxValue: number
  changeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
  changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
  saveSettings: () => void
};

export const SettingsV2: FC<SettingsV2PropsType> = (props) => {
  const {
    minValue,
    maxValue,
    changeMinValue,
    changeMaxValue,
    saveSettings
  } = props;

  const setButtonDisabled = minValue >= maxValue || minValue < 0;
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