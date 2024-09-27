import { PRODUCT_COUNT } from './costant'

export const productCount = (count) => {
    return {
        type: PRODUCT_COUNT,
        data: count,
    }
}