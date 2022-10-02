import React, {useState} from 'react';

export const AppContext = React.createContext(null);

const Context = (props: any) => {
    const [carCost, setCarCost] = useState(1000000);
    const [initialFee, setInitialFee] = useState(10);
    const [percentage, setPercentage] = useState(10)
    const [leaseTerm, setLeaseTerm] = useState(1);
    const [amountOfLeasing, setAmountOfLeasing] = useState(0);
    const [monthPay, setMonthPay] = useState(0);

    const setCarCostValue = (value: any) => {
        setCarCost(value);
    }

    const setInitialFeeValue = (value: any) => {
        setInitialFee(value);
    }

    const setLeaseTermValue = (value: any) => {
        setLeaseTerm(value);
    }

    const setPercentageValue = (value: any) => {
        setPercentage(value);
    }

    const calculateMonthlyPayment = () => {
        const formulaToCalculate = (carCost - initialFee) * ((0.035 * Math.pow((1 + 0.035), leaseTerm)) / (Math.pow((1 + 0.035), leaseTerm) - 1));
        setMonthPay(formulaToCalculate);
    }

    const calculateAmountOfLeasing = () => {
        const formulaToCalculate = initialFee + leaseTerm * monthPay;
        setAmountOfLeasing(formulaToCalculate);
    }

    const value: any = {
        firstInput: carCost,
        secondInput: initialFee,
        percentage,
        thirdInput: leaseTerm,
        amountOfLeasing,
        monthPay,
        setFirstValue: setCarCostValue,
        setSecondValue: setInitialFeeValue,
        setThirdValue: setLeaseTermValue,
        setPercentageValue,
        calculateAmountOfLeasing,
        calculateMonthlyPayment
    }

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}

export default Context;