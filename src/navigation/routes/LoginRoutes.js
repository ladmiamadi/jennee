import React, { lazy } from 'react'

// project import
import AuthLayout from '@components/layout/authLayout'

// render - login
const SignInContainer = lazy(() => import('@components/pages/authentification/signIn/SignInContainer'))
const SignUpContainer = lazy(() => import('@components/pages/authentification/signUp/SignUpContainer'))
const ForgottenPasswordContainer = lazy(() => import('@components/pages/authentification/forgottenPassword/ForgottenPasswordContainer'))
const CreatePasswordContainer = lazy(() => import('@components/pages/authentification/createPassword/CreatePasswordContainer'))
const NotFound = lazy(() => import('@components/pages/notFound/notFoundComponent'))

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <AuthLayout />,
    children: [
        {
            path: 'login',
            element: <SignInContainer />
        },
        {
            path: 'register',
            element: <SignUpContainer />
        },
        {
            path: 'forgotten-password',
            element: <ForgottenPasswordContainer />
        },
        {
            path: 'create-password',
            element: <CreatePasswordContainer />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]
}

export default LoginRoutes
