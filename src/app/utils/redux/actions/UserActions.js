import axios from 'axios';
// UTILS API
import { API_Users } from '../../api/BaseURL';
import {
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,

    CLEAR_ERRORS

} from '../constants/UsersConstants'


export const getUsers = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_USERS_REQUEST })

        // let link = `/api/users`
        let link = `${API_Users}`

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
