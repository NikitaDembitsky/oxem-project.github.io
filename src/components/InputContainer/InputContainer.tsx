import React, {useContext, useEffect} from "react";
import InputField from "../InputField/InputField";
import './InputContainer.css'
import InputFieldWithPercentage from "../InputFieldWithPercentage/InputFieldWithPercentage";
import {AppContext} from "../../context";

const InputContainer: React.FC = () => {
    const data: any = useContext(AppContext);

    useEffect(() => {
        data.setSecondValue(data.firstInput * data.percentage / 100);
        // eslint-disable-next-line
    }, [data.firstInput, data.percentage])


    return (
        <div className='input-container'>
            <InputField minValue={1000000} maxValue={6000000} label={"Стоимость автомобиля"}
                        inputValue={data.firstInput}
                        setInputValue={data.setFirstValue}/>
            <InputFieldWithPercentage minValue={10} maxValue={60} label={"Первоначальный взнос"}
                                      inputValue={data.secondInput}
                                      setPercentageValue={data.setPercentageValue}
                                      percentage={data.percentage}/>
            <InputField minValue={1} maxValue={60} label={"Срок лизинга"} inputValue={data.thirdInput}
                        setInputValue={data.setThirdValue}/>
        </div>
    )
}

export default InputContainer;