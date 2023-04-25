import { ROUTES } from '@constants/routesConst'

export const NAVBAR_MENU_ITEMS = [
    {
        title: 'events',
        link: ROUTES.DASHBOARD.EVENTS.PATH
    },
    {
        title: 'mon asso',
        link: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.POSTS.HEADER_ROOT
        // link: ROUTES.DASHBOARD.ORGANIZATION.PATH
    },
    {
        title: 'finances',
        link: ROUTES.DASHBOARD.FINANCE.PATH
    },
    {
        title: 'messagerie',
        link: ROUTES.DASHBOARD.MESSAGING.PATH
    }
]
