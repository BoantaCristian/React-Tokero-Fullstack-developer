import { ACTION_TYPES } from "../actions/operations";
const initialState = {
    list: []
}

export const operations = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }
    
        default:
            return state;
    }
}