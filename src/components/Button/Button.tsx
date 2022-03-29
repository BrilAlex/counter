import {FC} from "react";
import s from "./Button.module.css";

type ButtonPropsType = {
  title: string
  callback: () => void
  disabled?: boolean
};

export const Button: FC<ButtonPropsType> = (props) => {
  return (
    <button onClick={props.callback} className={s.button} disabled={props.disabled}>
      {props.title}
    </button>
  );
};