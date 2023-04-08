import React, { lazy } from 'react'

// project import

import MainLayout from '@components/layout/mainLayout'
import { Navigate } from 'react-router-dom'
import { ROUTES } from '@constants/routesConst'

/*				ORGANIZATION				*/

// render - dashboard / events
const EventsContainer = lazy(() => import('@components/pages/dashboard/events/EventsContainer'))
const EventDetailsContainer = lazy(() => import('@components/pages/dashboard/events/EventDetailsContainer'))
/*				ORGANIZATION				*/

// render - dashboard / my organization / posts
/*const OrganizationContainer = lazy(() => import('@components/pages/dashboard/organization/OrganizationContainer'))*/
// render - dashboard / my organization / posts
const PostsContainer = lazy(() => import('@components/pages/dashboard/organization/posts/PostsContainer'))
// render - dashboard / my organization / team
const TeamContainer = lazy(() => import('@components/pages/dashboard/organization/team/TeamContainer'))
// render - dashboard / my organization /  partnership
const PartnershipContainer = lazy(() => import('@components/pages/dashboard/organization/partnerships/PartnershipsContainer'))
// render - dashboard / my organization / free event
const FreeEventsContainer = lazy(() => import('@components/pages/dashboard/organization/freeEvents/FreeEventsContainer'))
// render - dashboard / my organization / profil
const ProfilContainer = lazy(() => import('@components/pages/dashboard/organization/profil/ProfilContainer'))
// render - dashboard / my organization / settings
const SettingsContainer = lazy(() => import('@components/pages/dashboard/organization/settings/SettingsContainer'))
/*				FINANCE				*/
// render - dashboard / finance / global
const FinanceContainer = lazy(() => import('@components/pages/dashboard/finance/FinanceContainer'))
// render - dashboard / finance / revenue
const RevenuesContainer = lazy(() => import('@components/pages/dashboard/finance/revenues/RevenuesContainer'))
// render - dashboard / finance / expenses
const ExpensesContainer = lazy(() => import('@components/pages/dashboard/finance/expenses/ExpensesContainer'))
// render - dashboard / finance / bills
const BillsContainer = lazy(() => import('@components/pages/dashboard/finance/bills/BillsContainer'))

// ==============================|| MAIN ROUTING ||============================== //
let isAuthenticated = true
const MainRoutes = {
    path: '/dashboard',
    element: isAuthenticated ? <MainLayout /> : <Navigate to={ROUTES.AUTHENTIFICATION.SIGN_IN.PATH} replace />,
    children: [
        {
            path: ROUTES.DASHBOARD.EVENTS.PATH,
            children: [
                {
                    path: ROUTES.DASHBOARD.EVENTS.PATH,
                    element: <EventsContainer />
                },
                {
                    path: ROUTES.DASHBOARD.EVENTS_DETAILS.PATH,
                    element: <EventDetailsContainer />
                }
            ]
        },
        {
            path: ROUTES.DASHBOARD.ORGANIZATION.PATH,
            children: [
                {
                    path: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.POSTS.PATH,
                    element: <PostsContainer />
                },
                {
                    path: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.TEAM.PATH,

                    element: <TeamContainer />
                },
                {
                    path: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.PARTNERSHIP.PATH,
                    element: <PartnershipContainer />
                },
                {
                    path: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.FREE_EVENTS.PATH,
                    element: <FreeEventsContainer />
                },
                {
                    path: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.PROFIL.PATH,
                    element: <ProfilContainer />
                },
                {
                    path: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.SETTINGS.PATH,
                    element: <SettingsContainer />
                }
            ]
        },
        {
            path: ROUTES.DASHBOARD.FINANCE.PATH,
            element: <FinanceContainer />,
            children: [
                {
                    path: ROUTES.DASHBOARD.FINANCE.CHILDREN.REVENUES.PATH,
                    element: <RevenuesContainer />
                },
                {
                    path: ROUTES.DASHBOARD.FINANCE.CHILDREN.EXPENSES.PATH,
                    element: <ExpensesContainer />
                },
                {
                    path: ROUTES.DASHBOARD.FINANCE.CHILDREN.BILLS.PATH,
                    element: <BillsContainer />
                }
            ]
        }
    ]
}

export default MainRoutes
