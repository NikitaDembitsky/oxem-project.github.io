import React, {useContext, useEffect} from "react";
import './ReportResult.css'
import {AppContext} from "../../context";

interface ThisProps {
    label: string
    value: number;
}

const ReportResult: React.FC<ThisProps> = ({label, value}) => {
    const data: any = useContext(AppContext);

    useEffect(() => {
        data.calculateMonthlyPayment();
        data.calculateAmountOfLeasing();
        // eslint-disable-next-line
    }, [data.firstInput, data.secondInput, data.thirdInput])
    return (
        <div className='report-wrapper'>
            <p className='report-title'>{label}</p>
            <p className='report-total'>{Math.round(value).toLocaleString()} ₽</p>
        </div>
    )
}

export default ReportResult;