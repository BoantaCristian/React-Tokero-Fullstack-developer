import api from "./api"

export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_ALL : 'FETCH_ALL'
}

export const fetchAll = () => {
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

        api.tradeOrders()
           .fetchAll()
           .then(
               response => {
                   dispatch({
                       type: ACTION_TYPES.FETCH_ALL,
                       payload: response.data
                    })
                    console.log("trade orders", response.data)
               }
           )
           .catch(
               err => {
                   console.log(err)
               }
           )
        
    }
}