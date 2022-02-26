import {FC} from "react";

type ButtonPropsType = {
  title: string
  disabled: boolean
  callback: () => void
};

export const Button: FC<ButtonPropsType> = (props) => {
  return (
    <button onClick={props.callback} disabled={props.disabled}>{props.title}</button>
  );
};