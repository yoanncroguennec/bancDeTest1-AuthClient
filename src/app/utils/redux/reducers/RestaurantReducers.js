import {
    ALL_RESTAURANTS_REQUEST,
    ALL_RESTAURANTS_SUCCESS,
    ALL_RESTAURANTS_FAIL,

    CLEAR_ERRORS

} from '../constants/RestaurantConstants'

export const restaurantsReducer = (state = { restaurants: [] }, action) => {
    switch (action.type) {
        case ALL_RESTAURANTS_REQUEST:
            return {
                loading: true,
                restaurants: []
            }

        case ALL_RESTAURANTS_SUCCESS:
            return {
                loading: false,
                restaurants: action.payload.restaurants,
            }

        case ALL_RESTAURANTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}
