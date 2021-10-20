import axios from "axios";

const baseUrl = "http://localhost:61450/api/Ballance/"

export default {
    deposits() {
        return{
            fetchAll : () => axios.get(baseUrl + 'GetDeposits'),
            fetchById: id => axios.get(baseUrl + 'GetDeposits' + id),
            create : newRecord => axios.post(baseUrl + 'AddDeposit', newRecord),
            update : (id, updateRecord) => axios.put(baseUrl + 'UpdateDeposit' + id, updateRecord),
            delete : id => axios.delete(baseUrl + 'DeleteDeposit' + id),
        }
    },
    withdrawals(){
        return{
            fetchAll : () => axios.get(baseUrl + 'GetWithdrawals')
        }
    },
    tradeOrders(){
        return{
            fetchAll : () => axios.get(baseUrl + 'GetTradeOrders')
        }
    }
}