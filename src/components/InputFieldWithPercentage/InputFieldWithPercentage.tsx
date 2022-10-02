import React from "react";
import './InputFieldWithPercentage.css'

interface ThisProps {
    minValue: number;
    maxValue: number;
    label?: string;
    inputType?: string;
    inputValue: any;
    setPercentageValue: (value: number) => void;
    percentage?: number;
}

const InputFieldWithPercentage: React.FC<ThisProps> = ({
                                                           minValue,
                                                           maxValue,
                                                           label,
                                                           setPercentageValue,
                                                           inputValue,
                                                           percentage
                                                       }) => {
    const timeout: any = React.useRef(null);

    const onChangeHandler = (value: number) => {
        setPercentageValue(value);
        clearTimeout(timeout.current);
        timeout.current = setTimeout(async () => {
            if (value < minValue) {
                setPercentageValue(minValue);
            } else if (value > maxValue) {
                setPercentageValue(maxValue);
            }
        }, 800);
    }

    return (
        <div className='input-field'>
            <label className='input-title'>{label}</label>
            <div className='input-area'>
                <input className='input-text' type="text" value={`${inputValue.toLocaleString()} ₽`} disabled={true}
                       placeholder={inputValue?.toLocaleString()}
                />
                <input className="input-info" type='number' value={percentage === 0 ? "" : percentage}
                       onChange={(e) => onChangeHandler(+e.target.value)}/>
                <i className='input-info-percent'>%</i>
            </div>
            <div className='input-range'>
                <input className='input-range' type="range" min={minValue} max={maxValue} value={percentage}
                       onChange={(e) => setPercentageValue(+e.target.value)} step="1"/>
            </div>
        </div>
    )
}

export default InputFieldWithPercentage;