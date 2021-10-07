import {FC} from "react";
import styles from "./CounterOutput.module.css";

type CounterOutputProps = {
    counterValue: number
    maxValue: number
    settingsModeIsOn: boolean
    inputError: boolean
}

export const CounterOutput: FC<CounterOutputProps> = (
    {counterValue, maxValue, settingsModeIsOn, inputError}
) => {
    const maxValueClass =
        `${counterValue === maxValue && !settingsModeIsOn ? styles.maxValue : ""}`;

    const getDisplayOutputClassName = () => `${styles.counterOutput} ${maxValueClass}`;
    const getDisplayOutput = () => settingsModeIsOn ?
        (inputError ? "Incorrect values" : "Set values") :
        counterValue

    return (
        <div className={getDisplayOutputClassName()}>
            {getDisplayOutput()}
        </div>
    );
}