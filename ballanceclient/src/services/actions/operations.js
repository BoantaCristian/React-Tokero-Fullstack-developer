import api from "./api"

export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_ALL : 'FETCH_ALL',
    GET_DEPOSITS : 'GET_DEPOSITS',
    GET_WITHDRAWALS : 'GET_WITHDRAWALS',
    GET_TRADEORDERS : 'GET_TRADEORDERS'
}

export const fetchDeposits = () => {
    return dispatch => {
        api.deposits()
           .fetchAll()
           .then(
               response => {
                   dispatch({
                       type: ACTION_TYPES.GET_DEPOSITS,
                       payload: response.data
                    })
               }
           )
           .catch(
               err => {
                   console.log(err)
               }
           )   
    }
}

export const fetchWithdrawals = () => {
    return dispatch => {
        api.withdrawals()
           .fetchAll()
           .then(
               response => {
                   dispatch({
                       type: ACTION_TYPES.GET_WITHDRAWALS,
                       payload: response.data
                    })
               }
           )
           .catch(
               err => {
                   console.log(err)
               }
           )
        
    }
}  

export const fetchTradeOrders = () => {
    return dispatch => {
        api.tradeOrders()
           .fetchAll()
           .then(
               response => {
                   dispatch({
                       type: ACTION_TYPES.GET_TRADEORDERS,
                       payload: response.data
                    })
               }
           )
           .catch(
               err => {
                   console.log(err)
               }
           )
        
    }
}  