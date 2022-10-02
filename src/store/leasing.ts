import {makeAutoObservable} from "mobx";
import {requestLeasingApi} from "../api/requestLeasingApi";

class Leasing {
    result = true;

    constructor() {
        makeAutoObservable(this);
    }

    sendLeasingInfo = async (carCost: number, initialFee: number, percentage: number, leaseTerm: number, amountOfLeasing: number, monthPay: number) => {
        try {
            this.result = false;
            const res = await requestLeasingApi.requestLeasing(carCost, initialFee, percentage, leaseTerm, amountOfLeasing, monthPay);
            this.result = res.data;
        } catch (e) {
            this.result = true;
        }

    }
}

export default new Leasing()