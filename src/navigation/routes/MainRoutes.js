import React, { lazy } from 'react'

// project import

import MainLayout from '@components/layout/mainLayout'
import { Navigate } from 'react-router-dom'
import { ROUTES } from '@constants/routesConst'
import MemberDetailsContainer from '@components/pages/dashboard/organization/team/teamDetails/MemberDetailsContainer'

/*				ORGANIZATION				*/

// render - dashboard / events
const EventsPageContainer = lazy(() => import('@components/pages/dashboard/events/EventsPageContainer'))
const EventsContainer = lazy(() => import('@components/pages/dashboard/events/events/EventsContainer'))
const EventDetailsContainer = lazy(() => import('@components/pages/dashboard/events/eventDetails/EventDetailsContainer'))
/*				ORGANIZATION				*/

// render - dashboard / my organization / organization
const OrganizationContainer = lazy(() => import('@components/pages/dashboard/organization/OrganizationContainer'))
// render - dashboard / my organization / organization
const PostsContainer = lazy(() => import('@components/pages/dashboard/organization/posts/PostsContainer'))
const PostsPageContainer = lazy(() => import('@components/pages/dashboard/organization/posts/PostsPageContainer'))

// render - dashboard / my organization / posts / post-details
const PostDetailsContainer = lazy(() => import('@components/pages/dashboard/organization/posts/postDetails/PostDetailsContainer'))
// render - dashboard / my organization / team
const TeamContainer = lazy(() => import('@components/pages/dashboard/organization/team/TeamContainer'))
const TeamPageContainer = lazy(() => import('@components/pages/dashboard/organization/team/TeamPageContainer'))
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
    path: ROUTES.DASHBOARD.ROOT.PATH,
    element: isAuthenticated ? <MainLayout /> : <Navigate to={ROUTES.AUTHENTIFICATION.SIGN_IN.PATH} replace />,
    children: [
        {
            path: ROUTES.DASHBOARD.EVENTS.PATH,
            element: <EventsPageContainer />,
            children: [
                {
                    path: ROUTES.DASHBOARD.EVENTS.CHILDREN.EVENT.PATH,
                    element: <EventsContainer />
                },
                {
                    path: ROUTES.DASHBOARD.EVENTS.CHILDREN.EVENTS_DETAILS.PATH,
                    element: <EventDetailsContainer />
                }
            ]
        },
        {
            path: ROUTES.DASHBOARD.ORGANIZATION.PATH,
            element: <OrganizationContainer />,
            children: [
                {
                    path: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.POSTS.PATH,
                    element: <PostsPageContainer />,
                    children: [
                        {
                            path: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.POSTS.CHILDREN.POST.PATH,
                            element: <PostsContainer />
                        },
                        {
                            path: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.POSTS.CHILDREN.POSTS_DETAILS.PATH,
                            element: <PostDetailsContainer />
                        }
                    ]
                },
                {
                    path: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.TEAM.PATH,
                    element: <TeamPageContainer />,
                    children: [
                        {
                            path: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.TEAM.CHILDREN.MEMBER_LIST.PATH,
                            element: <TeamContainer />
                        },
                        {
                            path: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.TEAM.CHILDREN.MEMBER_DETAILS.PATH,
                            element: <MemberDetailsContainer />
                        }
                    ]
                }
            ]
        },
        {
            path: ROUTES.DASHBOARD.PROFIL.PATH,
            element: <ProfilContainer />
        },
        {
            path: ROUTES.DASHBOARD.SETTINGS.PATH,
            element: <SettingsContainer />
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
