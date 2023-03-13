import React from 'react'
import ReactDOM from 'react-dom/client'
import Rooter from '@navigation/Rooter'
import { Provider } from 'react-redux'
import store from './store/index'
import '@styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <Rooter />
    </Provider>
)
