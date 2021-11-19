import {ChangeEvent, FC} from "react";
import styles from "../Counter/Counter.module.css";
import {NumberInput} from "../NumberInput/NumberInput";
import {Button} from "../Button/Button";

type SettingsPropsType = {
  minValue: number
  maxValue: number
  settingsMode: boolean
  inputError: boolean
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  setSettingsMode: (value: boolean) => void
};

export const Settings: FC<SettingsPropsType> = (
  {
    minValue,
    maxValue,
    settingsMode,
    inputError,
    setMinValue,
    setMaxValue,
    setSettingsMode,
  }
) => {
  const setDisabled = !settingsMode || inputError;
  let minValueError = minValue >= maxValue || minValue < 0;
  let maxValueError = minValue >= maxValue || maxValue < 0;

  const getMinValueInputClassName = () => minValueError ? styles.error : "";
  const getMaxValueInputClassName = () => maxValueError ? styles.error : "";

  const activateSettingsMode = (e: ChangeEvent<HTMLInputElement>) => {
    let currentValue = Number(e.currentTarget.value);
    setSettingsMode(true);
    switch (e.currentTarget.name) {
      case "minValue":
        setMinValue(currentValue);
        break;
      case "maxValue":
        setMaxValue(currentValue);
        break;
      default:
        throw new Error("Unknown input name");
    }
  };

  const saveSettings = () => {
    setSettingsMode(false);
  };

  return (
    <div className={styles.counterBlock}>
      <div className={styles.settingsOutput}>
        <NumberInput
          label={"Min value"}
          name={"minValue"}
          value={minValue}
          onChangeCallback={activateSettingsMode}
          inputClassName={getMinValueInputClassName()}
        />
        <NumberInput
          label={"Max value"}
          name={"maxValue"}
          value={maxValue}
          onChangeCallback={activateSettingsMode}
          inputClassName={getMaxValueInputClassName()}
        />
      </div>
      <div className={styles.controlButtons}>
        <Button
          title={"Set"}
          callback={saveSettings}
          disabled={setDisabled}
        />
      </div>
    </div>
  );
};