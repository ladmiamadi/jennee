import { ROUTES } from '@constants/routesConst'

export const EVENT_MENU_ITEMS = [
    {
        id: 1,
        title: 'A venir',
        btnName: 'Créer un nouvel event'
    },
    {
        id: 2,
        title: 'Passés',
        btnName: 'Créer un nouvel event'
    },
    {
        id: 3,
        title: 'Brouillons',
        btnName: 'Créer un nouvel event'
    },
    {
        id: 4,
        title: 'Partagés',
        btnName: 'Créer un nouvel event'
    }
]
export const ORGANIZATION_MENU_ITEMS = [
    {
        id: 1,
        title: 'Posts',
        link: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.POSTS.PATH,
        btnName: 'Publier un Post',
        handleOpen: () => console.log('clicked')
    },
    {
        id: 2,
        title: 'Equipe',
        link: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.TEAM.PATH,
        btnName: 'Ajouter un membre',
        handleOpen: () => console.log('clicked')
    },
    {
        id: 5,
        title: 'Profil',
        link: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.PROFIL.PATH,
        btnName: 'Modifier les informations',
        handleOpen: (setIsClicked, isClicked) => setIsClicked(!isClicked)
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
