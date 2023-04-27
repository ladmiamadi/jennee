import { ROUTES } from '@constants/routesConst'

export const EVENT_MENU_ITEMS = [
    {
        id: 1,
        title: 'A venir'
    },
    {
        id: 2,
        title: 'Passés'
    },
    {
        id: 3,
        title: 'Brouillons'
    },
    {
        id: 4,
        title: 'Partagés'
    }
]
export const ORGANIZATION_MENU_ITEMS = [
    {
        id: 1,
        title: 'Posts',
        link: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.POSTS.PATH,
        btnName: 'Publier un Post'
    },
    {
        id: 2,
        title: 'Equipe',
        link: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.TEAM.PATH,
        btnName: 'Ajouter un membre'
    },
    {
        id: 5,
        title: 'Profil'
    }
]

export const FINANCES_MENU_ITEMS = [
    {
        id: 1,
        title: 'Global'
    },
    {
        id: 2,
        title: 'Recettes'
    },
    {
        id: 3,
        title: 'Dépenses'
    },
    {
        id: 4,
        title: 'Factures'
    }
]
