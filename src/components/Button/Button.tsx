import {FC} from "react";

type ButtonPropsType = {
  title: string
  callback: () => void
  disabled?: boolean
};

export const Button: FC<ButtonPropsType> = (
  {title, callback, disabled}
) => {
  return <button onClick={callback} disabled={disabled}>
    {title}
  </button>;
};