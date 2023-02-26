import { combineReducers } from 'redux'
import applicationReducer from './application.reducer'
import authReducer from './auth.reducer'

const rootReducer = combineReducers({
    applicationReducer,
    authReducer
})
export default rootReducer
