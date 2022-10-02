import './SubmitButton.css'
import {observer} from "mobx-react-lite";
import leasing from "../../store/leasing";
import {useContext} from "react";
import {AppContext} from "../../context";


const SubmitButton = observer(() => {
    const data: any = useContext(AppContext);
    const onSubmitInfo = () => {
        leasing.sendLeasingInfo(data.carCost, data.initialFee, data.percentage, data.leaseTerm, data.amountOfLeasing, data.monthPay);
    }

    return (
        <div className='submit-btn'>
            <button disabled={!leasing.result} onClick={onSubmitInfo} type="submit">{leasing.result ?
                <div>Оставить заявку</div> :
                <div className='loader'></div>}</button>
        </div>
    )
})


export default SubmitButton;