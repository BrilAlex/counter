import {ChangeEvent, FC} from "react";
import styles from "./SettingsOutput.module.css";
import {NumberInput} from "../NumberInput/NumberInput";

type SettingsProps = {
    startValue: number
    maxValue: number
    changeSettingsCallback: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SettingsOutput:FC<SettingsProps> = (
    {startValue, maxValue, changeSettingsCallback}
) => {
    let startValueError = startValue >= maxValue || startValue < 0;
    let maxValueError = startValue >= maxValue || maxValue < 0;

    const getStartValueInputClassName = () => startValueError ? styles.error : "";
    const getMaxValueInputClassName = () => maxValueError ? styles.error : "";

    return (
        <div className={styles.settingsOutput}>
                <NumberInput
                    labelText={"Start value:"}
                    inputName={"startValue"}
                    inputValue={startValue}
                    onChangeCallback={changeSettingsCallback}
                    inputClassName={getStartValueInputClassName()}
                />
                <NumberInput
                    labelText={"Max value:"}
                    inputName={"maxValue"}
                    inputValue={maxValue}
                    onChangeCallback={changeSettingsCallback}
                    inputClassName={getMaxValueInputClassName()}
                />
        </div>
    );
}