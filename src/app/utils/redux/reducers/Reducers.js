import { combineReducers } from 'redux';
// REDUCERS
import { authReducer } from './AuthReducers';
import { usersReducer } from './UserReducers'

export const reducer = combineReducers({
    // AUTH
    auth : authReducer,

    // USERS
    users: usersReducer,

})
