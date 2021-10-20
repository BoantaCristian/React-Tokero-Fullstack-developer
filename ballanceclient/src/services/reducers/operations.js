import { ACTION_TYPES } from "../actions/operations";
const initialState = {
    deposits: [],
    withdrawals: [],
    tradeOrders: []
}

export const operations = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_DEPOSITS:
            return {
                ...state,
                deposits: [...action.payload]
            }
    
        case ACTION_TYPES.GET_WITHDRAWALS:
            return {
                ...state,
                withdrawals: [...action.payload]
            }
    
        case ACTION_TYPES.GET_TRADEORDERS:
            return {
                ...state,
                tradeOrders: [...action.payload]
            }
    
        default:
            return state;
    }
}