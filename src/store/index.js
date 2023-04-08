import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
    key: 'brkp',
    storage
}

/*const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))*/
//const composedEnhancer =  process.env.NODE_ENV === 'dev' ? composeWithDevTools(applyMiddleware(thunkMiddleware)) : applyMiddleware(thunkMiddleware)
const persistedReducer = persistReducer(persistConfig, rootReducer)
/*const store = createStore(rootReducer, composedEnhancer)*/

export const configureStore = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
    /* preloadedState, */
    /*process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunkMiddleware)) : applyMiddleware(thunkMiddleware)*/
)
export const persistor = persistStore(configureStore)
