import React, { lazy } from 'react'

// project import
import AuthLayout from '@components/layout/authLayout'
import { ROUTES } from '@constants/routesConst'
// render - login
const SignInContainer = lazy(() => import('@components/pages/authentification/signIn/SignInContainer'))
const SignUpContainer = lazy(() => import('@components/pages/authentification/signUp/ComponentList/SignUpContainer'))
const PasswordForgotContainer = lazy(() =>
    import('@components/pages/authentification/forgottenPassword/NewPassword/PasswordForgotContainer')
)
const CreatePasswordContainer = lazy(() => import('@components/pages/authentification/createPassword/CreatePasswordContainer'))
const PrivacyPolicy = lazy(() => import('@components/pages/privacyPolicy/PrivacyPolicy'))
const Cgu = lazy(() => import('@components/pages/cgu/Cgu'))
const Cgv = lazy(() => import('@components/pages/cgv/Cgv'))

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
            element: <PasswordForgotContainer />
        },
        {
            path: ROUTES.AUTHENTIFICATION.CREATE_PASSWORD.PATH,
            element: <CreatePasswordContainer />
        },
        {
            path: ROUTES.PRIVACY_POLICY.PATH,
            element: <PrivacyPolicy />
        },
        {
            path: ROUTES.CGV.PATH,
            element: <Cgv />
        },
        {
            path: ROUTES.CGU.PATH,
            element: <Cgu />
        }
    ]
}

export default LoginRoutes
