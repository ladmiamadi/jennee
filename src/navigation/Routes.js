import React, { useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'

// project import
import LoginRoutes from '@navigation/routes/LoginRoutes'
import MainRoutes from '@navigation/routes/MainRoutes'
import NotFoundComponent from '@components/pages/notFound/notFoundComponent'
import { ROUTES } from '@constants/routesConst'
import { useDispatch } from 'react-redux'
import { activeItem, activeLink } from '@actions/application.action'
// ==============================|| ROUTING RENDER ||============================== //

export default function Routes() {
    let location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        const path = location.pathname.split('/')[1] || location.pathname
        Object.keys(ROUTES.AUTHENTIFICATION).forEach((key) => {
            if (ROUTES.AUTHENTIFICATION[key].PATH === path) {
                dispatch(activeLink(ROUTES.AUTHENTIFICATION[key].TITLE))
            }
        })
        dispatch(activeItem(location.pathname.split('/')[2]))
    }, [dispatch, location])

    return useRoutes([MainRoutes, LoginRoutes, { path: '*', element: <NotFoundComponent /> }])
}
