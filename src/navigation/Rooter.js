import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Loader from '@components/common/loader/Loader'
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
