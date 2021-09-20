import {FC} from "react";

type ControlButtonProps = {
  buttonTitle: string
  callback: () => void
  disabled: boolean
}

export const Button: FC<ControlButtonProps> = ({
  disabled,
  buttonTitle,
  callback
}) => (
  <button onClick={callback} disabled={disabled}>
    {buttonTitle}
  </button>
);
