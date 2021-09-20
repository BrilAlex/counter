import {FC} from "react";
import styles from "./CounterOutput.module.css";

type CounterOutputProps = {
  counterValue: number
  maxValue: number
}

export const CounterOutput: FC<CounterOutputProps> = ({counterValue, maxValue}) => {
  const maxValueClass = `${counterValue === maxValue ? styles.maxValue : ""}`;

  const getValidClassName = () => `${styles.counterOutput} ${maxValueClass}`;

    return(
    <div
      className={getValidClassName()}>
      {counterValue}
    </div>
  );
}