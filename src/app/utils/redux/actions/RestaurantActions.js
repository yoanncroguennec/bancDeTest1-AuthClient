import axios from 'axios';
import { API_Restaurants } from '../../api/BaseURL';
import {
    ALL_RESTAURANTS_REQUEST,
    ALL_RESTAURANTS_SUCCESS,
    ALL_RESTAURANTS_FAIL,
    
    CLEAR_ERRORS

} from '../constants/RestaurantConstants'


export const getRestaurants = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_RESTAURANTS_REQUEST })

        let link = `${API_Restaurants}`

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_RESTAURANTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_RESTAURANTS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
