import { PRODUCT_COUNT } from './costant'
const initialState = {
    count: 0,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_COUNT:
            return {
                ...state,
                count: action.data,
            }

        default:
            return state
    }
}