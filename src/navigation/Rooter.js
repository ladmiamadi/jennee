import React, { lazy, Suspense } from 'react'
import Loader from '@components/common/loader/Loader'
import { BrowserRouter } from 'react-router-dom'
import Routes from '@navigation/Routes'

const Rooter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Routes />
            </Suspense>
        </BrowserRouter>
    )
}

export default Rooter
