import React, {useContext} from 'react';
import './App.scss';
import InputContainer from "../InputContainer/InputContainer";
import ReportResult from "../ReportResult/ReportResult";
import SubmitButton from "../SubmitButton/SubmitButton";
import {AppContext} from "../../context";

function App() {
    const data: any = useContext(AppContext);

    return (
        <div className="App">
            <div className='App-header'>
                <h3>Рассчитайте стоимость автомобиля в лизинг</h3>
            </div>
            <InputContainer/>
            <div className='report'>
                <div className='report-label'>
                    <ReportResult label={'Сумма договора лизинга'} value={data.amountOfLeasing}/>
                    <ReportResult label={'Ежемесячный платеж от'} value={data.monthPay}/>
                </div>
                <SubmitButton/>
            </div>
        </div>
    );
}

export default App;
