import React, { lazy } from 'react'

// project import
import MainLayout from '@components/layout/mainLayout'
import { Navigate } from 'react-router-dom'

/*				ORGANIZATION				*/

// render - dashboard / events
const EventsContainer = lazy(() => import('@components/pages/dashboard/events/EventsContainer'))
/*				ORGANIZATION				*/

// render - dashboard / my organization / posts
const OrganizationContainer = lazy(() => import('@components/pages/dashboard/organization/OrganizationContainer'))
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
// render - not found
const NotFound = lazy(() => import('@components/pages/notFound/notFoundComponent'))
// ==============================|| MAIN ROUTING ||============================== //
let isAuthenticated = true
const MainRoutes = {
    path: '/dashboard',
    element: isAuthenticated ? <MainLayout /> : <Navigate to="/login" replace />,
    children: [
        {
            path: 'events',
            element: <EventsContainer />
        },
        {
            path: 'organization',
            element: <OrganizationContainer />,
            children: [
                {
                    path: 'posts',
                    element: <PostsContainer />
                },
                {
                    path: 'team',
                    element: <TeamContainer />
                },
                {
                    path: 'partnership',
                    element: <PartnershipContainer />
                },
                {
                    path: 'free-events',
                    element: <FreeEventsContainer />
                },
                {
                    path: 'profil',
                    element: <ProfilContainer />
                },
                {
                    path: 'settings',
                    element: <SettingsContainer />
                }
            ]
        },
        {
            path: 'finance',
            element: <FinanceContainer />,
            children: [
                {
                    path: 'revenue',
                    element: <RevenuesContainer />
                },
                {
                    path: 'expenses',
                    element: <ExpensesContainer />
                },
                {
                    path: 'bills',
                    element: <BillsContainer />
                }
            ]
        },
        { path: '*', element: <NotFound /> }
    ]
}

export default MainRoutes
