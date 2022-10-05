import axios from 'axios';
import absoluteUrl from 'next-absolute-url'

import{
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,


    CLEAR_ERRORS
} from '../constants/productConstants'


// Get all products 
export const getProducts = (req) => async(dispatch) => {
    try {

        const {origin} = absoluteUrl(req)

        const {data} = await axios.get(`${origin}/api/products`)

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data 
        })
        
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}


// Clear Errors  
export const clearErrors  = () => async(dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    })
};

