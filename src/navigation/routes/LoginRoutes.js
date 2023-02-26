import React, { lazy } from 'react'

// project import
import AuthLayout from '@components/layout/authLayout'
import { ROUTES } from '@constants/routesConst'

// render - login
const SignInContainer = lazy(() => import('@components/pages/authentification/signIn/SignInContainer'))
const SignUpContainer = lazy(() => import('@components/pages/authentification/signUp/SignUpContainer'))
const ForgottenPasswordContainer = lazy(() => import('@components/pages/authentification/forgottenPassword/ForgottenPasswordContainer'))
const CreatePasswordContainer = lazy(() => import('@components/pages/authentification/createPassword/CreatePasswordContainer'))

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: ROUTES.ROOT.PATH,
    element: <AuthLayout />,
    children: [
        {
            path: ROUTES.AUTHENTIFICATION.SIGN_IN.PATH,
            element: <SignInContainer />
        },
        {
            path: ROUTES.AUTHENTIFICATION.SIGN_UP.PATH,
            element: <SignUpContainer />
        },
        {
            path: ROUTES.AUTHENTIFICATION.FORGOTTEN_PASSWORD.PATH,
            element: <ForgottenPasswordContainer />
        },
        {
            path: ROUTES.AUTHENTIFICATION.CREATE_PASSWORD.PATH,
            element: <CreatePasswordContainer />
        }
    ]
}

export default LoginRoutes
