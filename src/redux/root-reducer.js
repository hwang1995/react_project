import { combineReducers } from 'redux'
import authReducer from './auth-reducer';
import colorReducer from './color-reducer'

const rootReducer = combineReducers({
    colorReducer,
    authReducer,
})

export default rootReducer;