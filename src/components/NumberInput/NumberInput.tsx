import {ChangeEvent, FC} from "react";

type NumberInputProps = {
    labelText: string
    inputName: string
    inputValue: number
    onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
    inputClassName: string
}

export const NumberInput:FC<NumberInputProps> = (props) => {
    return(
        <label>
            {props.labelText}
            <input
                type={"number"}
                name={props.inputName}
                value={props.inputValue}
                onChange={props.onChangeCallback}
                className={props.inputClassName}
            />
        </label>
    );
}