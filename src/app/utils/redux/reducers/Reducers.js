import { combineReducers } from 'redux';
// REDUCERS
import { authReducer } from './AuthReducers';
import { productsReducer } from './ProductReducers'
import { restaurantsReducer } from './RestaurantReducers';

export const reducer = combineReducers({
    // AUTH
    auth : authReducer,

    // PRODUCTS
    products: productsReducer,
    
    // RESTAURANTS
    restaurants: restaurantsReducer,
})
