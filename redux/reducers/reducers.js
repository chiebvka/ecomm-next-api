import { combineReducers } from "redux";
import { allProductsReducer } from "./productReducers";

const reducer = combineReducers({
    allProducts: allProductsReducer
    
})

export default reducer 