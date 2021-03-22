import { types } from '../types/types';
export const itemsReducer = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case types.itemList:
            return {
                ...state,
                items: action.payload.items
            }
        case types.detail:
            return {
                ...state,
                detail: action.payload.detail
            }
        case types.login:
            return {
                ...state,
                detail: action.payload.detail
            }
        default:
            return state;
    }
}
