import { ROUTES } from '@constants/routesConst'

export const EVENT_MENU_ITEMS = [
    {
        id: 1,
        title: 'A venir',
        btnName: 'Créer un nouvel event',
        inputSearch: true
    },
    {
        id: 2,
        title: 'Passés',
        btnName: 'Créer un nouvel event',
        inputSearch: true
    },
    {
        id: 3,
        title: 'Brouillons',
        btnName: 'Créer un nouvel event',
        inputSearch: true
    },
    {
        id: 4,
        title: 'Partagés',
        btnName: 'Créer un nouvel event',
        inputSearch: true
    }
]
export const ORGANIZATION_MENU_ITEMS = [
    {
        id: 1,
        title: 'Posts',
        link: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.POSTS.PATH,
        btnName: 'Publier un Post',
        inputSearch: true,
        handleOpen: () => console.log('clicked')
    },
    {
        id: 2,
        title: 'Equipe',
        link: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.TEAM.PATH,
        btnName: 'Ajouter un membre',
        handleOpen: () => console.log('clicked'),
        inputSearch: true
    },
    {
        id: 5,
        title: 'Profil',
        link: ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.PROFIL.PATH,
        btnName: 'Modifier les informations',
        handleOpen: (setIsClicked, isClicked) => setIsClicked(!isClicked),
        inputSearch: false
    }
]

export const FINANCES_MENU_ITEMS = [
    {
        id: 1,
        title: 'Global',
        inputSearch: false,
        link: ROUTES.DASHBOARD.FINANCE.CHILDREN.GLOBAL.PATH
    },
    {
        id: 2,
        title: 'Recettes',
        inputSearch: false,
        btnName: 'Ajouter une recette',
        link: ROUTES.DASHBOARD.FINANCE.CHILDREN.REVENUES.PATH
    },
    {
        id: 3,
        title: 'Dépenses',
        inputSearch: false,
        btnName: 'Ajouter une recette',
        link: ROUTES.DASHBOARD.FINANCE.CHILDREN.EXPENSES.PATH
    },
    {
        id: 4,
        title: 'Factures',
        inputSearch: false,
        btnName: 'Importer un dossier',
        link: ROUTES.DASHBOARD.FINANCE.CHILDREN.BILLS.PATH,
        handleOpen: () => console.log('clicked'),
        options: 'Créer un dossier',
        classNameOptions: 'btn--edit',
        handleClickOption: () => console.log('clicked')
    }
]
