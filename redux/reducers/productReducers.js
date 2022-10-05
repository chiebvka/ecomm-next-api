import{
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,


    CLEAR_ERRORS
} from '../constants/productConstants'


//All Product Reducer 
export const allProductsReducer = (state ={ products:[] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_SUCCESS:
            return{
                productCount: action.payload.productCount,
                resPerPage: action.payload.resPerPage, 
                filteredProductsCount: action.payload.filteredProductsCount,
                products: action.payload.products
            }
        case ALL_PRODUCTS_FAIL:
            return{
                error: action.payload
            }

        case CLEAR_ERRORS:
            return{
                error: null
            }
    
        default:
            return state
    }
}