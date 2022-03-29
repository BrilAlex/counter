import {ChangeEvent, FC} from "react";
import s from "./InputNumber.module.css";

type InputNumberPropsType = {
  labelSpan: string
  value: number
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  error: boolean
};

export const InputNumber: FC<InputNumberPropsType> = (props) => {
  const {labelSpan, value, name, onChange, error} = props;

  const inputClassName = error ? `${s.input} ${s.error}` : s.input;

  return (
    <label className={s.label}>
      <span className={s.labelSpan}>{labelSpan}</span>
      <input
        type={"number"}
        name={name}
        value={value}
        onChange={onChange}
        className={inputClassName}
      />
    </label>
  );
};