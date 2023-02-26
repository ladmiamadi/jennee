import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
//const composedEnhancer =  process.env.NODE_ENV === 'dev' ? composeWithDevTools(applyMiddleware(thunkMiddleware)) : applyMiddleware(thunkMiddleware)
const store = createStore(rootReducer, composedEnhancer)
export default store
