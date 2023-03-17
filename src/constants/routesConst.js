export const ROUTES = {
    ROOT: {
        NAME: 'root',
        PATH: '/'
    },
    AUTHENTIFICATION: {
        SIGN_IN: {
            NAME: 'login',
            PATH: '/'
        },
        SIGN_UP: {
            NAME: 'register',
            PATH: 'register'
        },
        FORGOTTEN_PASSWORD: {
            NAME: 'forgotten-password',
            PATH: 'forgotten-password'
        },
        CREATE_PASSWORD: {
            NAME: 'create-password',
            PATH: 'create-password'
        }
    },
    DASHBOARD: {
        ROOT: {
            NAME: 'dashboard',
            PATH: 'dashboard'
        },
        EVENTS: {
            NAME: 'events',
            PATH: ''
        },
        EVENTS_DETAILS: {
            NAME: 'events-details',
            PATH: 'events-details'
        },
        ORGANIZATION: {
            NAME: 'organization',
            PATH: 'organization',
            CHILDREN: {
                POSTS: {
                    NAME: 'posts',
                    PATH: 'posts'
                },
                TEAM: {
                    NAME: 'team',
                    PATH: 'team'
                },
                PARTNERSHIP: {
                    NAME: 'partnership',
                    PATH: 'partnership'
                },
                FREE_EVENTS: {
                    NAME: 'free-events',
                    PATH: 'free-events'
                },
                PROFIL: {
                    NAME: 'profil',
                    PATH: 'profil'
                },
                SETTINGS: {
                    NAME: 'settings',
                    PATH: 'settings'
                }
            }
        },
        FINANCE: {
            NAME: 'finance',
            PATH: 'finance',
            CHILDREN: {
                REVENUES: {
                    NAME: 'revenues',
                    PATH: 'revenues'
                },
                EXPENSES: {
                    NAME: 'expenses',
                    PATH: 'expenses'
                },
                BILLS: {
                    NAME: 'bills',
                    PATH: 'bills'
                }
            }
        }
    }
}
