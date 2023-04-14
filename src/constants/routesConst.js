export const ROUTES = {
    ROOT: {
        NAME: 'root',
        PATH: '/'
    },
    CGU: {
        NAME: 'CGU',
        PATH: '/cgu'
    },
    CGV: {
        NAME: 'cgv',
        PATH: '/cgv'
    },
    PRIVACY_POLICY: {
        NAME: 'privacy-policy',
        PATH: '/privacy-policy'
    },
    AUTHENTIFICATION: {
        SIGN_IN: {
            NAME: 'login',
            PATH: '/',
            TITLE: 'Connexion'
        },
        SIGN_UP: {
            NAME: 'register',
            PATH: 'register',
            TITLE: 'Inscription'
        },
        FORGOTTEN_PASSWORD: {
            NAME: 'forgotten-password',
            PATH: 'forgotten-password',
            TITLE: 'Mot de passe oublié'
        },
        CREATE_PASSWORD: {
            NAME: 'create-password',
            PATH: 'create-password',
            TITLE: 'Nouveau membre'
        }
    },
    DASHBOARD: {
        ROOT: {
            NAME: 'dashboard',
            PATH: ''
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
                    PATH: 'posts',
                    CHILDREN: {
                        POSTS_DETAILS: {
                            NAME: 'details',
                            PATH: 'details'
                        }
                    }
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
        },
        MESSAGING: {
            NAME: 'messaging',
            PATH: 'messaging'
        }
    }
}
