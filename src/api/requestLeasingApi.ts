import {api} from "./axiosConfig";

class RequestLeasingApi {
    requestLeasing = (carCost: number, initialFee: number, percentage: number, leaseTerm: number, amountOfLeasing: number, monthPay: number) => {
        return api.post('', {
            carCost: carCost,
            initialFee: initialFee,
            percentage: percentage,
            leaseTerm: leaseTerm,
            amountOfLeasing: amountOfLeasing,
            monthPay: monthPay

        })
    }
}

export const requestLeasingApi = new RequestLeasingApi();