import React from 'react'
import { useRoutes } from 'react-router-dom'

// project import
import LoginRoutes from '@navigation/routes/LoginRoutes'
import MainRoutes from '@navigation/routes/MainRoutes'
import NotFoundComponent from '@components/pages/notFound/notFoundComponent'
// ==============================|| ROUTING RENDER ||============================== //

export default function Routes() {
    return useRoutes([MainRoutes, LoginRoutes, { path: '*', element: <NotFoundComponent /> }])
}
