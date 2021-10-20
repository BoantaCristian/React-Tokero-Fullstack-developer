import api from "./api"

export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_ALL : 'FETCH_ALL'
}

export const fetchWithdrawals = () => {
    return dispatch => {
        api.withdrawals()
           .fetchAll()
           .then(
               response => {
                   dispatch({
                       type: ACTION_TYPES.FETCH_ALL,
                       payload: response.data
                    })
                    console.log("withdrawals", response.data)
               }
           )
           .catch(
               err => {
                   console.log(err)
               }
           )
        
    }
}  

export const fetchDeposits = () => {
    return dispatch => {
        api.deposits()
           .fetchAll()
           .then(
               response => {
                   dispatch({
                       type: ACTION_TYPES.FETCH_ALL,
                       payload: response.data
                    })
                    console.log("deposits", response.data)
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
                       type: ACTION_TYPES.FETCH_ALL,
                       payload: response.data
                    })
                    console.log("tradeOrders", response.data)
               }
           )
           .catch(
               err => {
                   console.log(err)
               }
           )
        
    }
}  