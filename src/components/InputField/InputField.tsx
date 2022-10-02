import React from "react";
import './InputField.css'

interface ThisProps {
    minValue: number;
    maxValue: number;
    label?: string;
    inputType?: string;
    inputValue: any;
    setInputValue: (value: number) => void;
}

const InputField: React.FC<ThisProps> = ({minValue, maxValue, label, setInputValue, inputValue}) => {
    const timeout: any = React.useRef(null);

    const onChangeHandler = (value: number) => {
        setInputValue(value);
        clearTimeout(timeout.current);
        timeout.current = setTimeout(async () => {
            if (value < minValue) {
                setInputValue(minValue);
            } else if (value > maxValue) {
                setInputValue(maxValue);
            }
        }, 800);
    }

    return (
        <div className='input-field'>
            <label className='input-title'>{label}</label>
            <div className='input-symbol'>
                <input className='input-text' type="number" value={inputValue === 0 ? "" : inputValue.toLocaleString()}
                       placeholder={inputValue?.toLocaleString()}
                       onChange={(e) => onChangeHandler(+e.target.value)}
                />
                <i className="input-symbol-info" aria-hidden="true">{label === 'Срок лизинга' ? 'мес.' : '₽'}</i>
            </div>
            <div className='input-range'>
                <input className='input-range' type="range" min={minValue} max={maxValue} value={inputValue}
                       onChange={(e) => setInputValue(+e.target.value)} step="1"/>
            </div>
        </div>
    )
}

export default InputField;