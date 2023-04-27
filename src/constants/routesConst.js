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
            PATH: '/dashboard'
        },
        EVENTS: {
            NAME: 'events',
            PATH: 'events',
            CHILDREN: {
                EVENT: {
                    NAME: 'events',
                    PATH: ''
                },
                EVENTS_DETAILS: {
                    NAME: 'events-details',
                    PATH: 'details'
                }
            }
        },
        ORGANIZATION: {
            NAME: 'organization',
            PATH: 'organization',
            CHILDREN: {
                POSTS: {
                    HEADER_ROOT: 'organization/posts',
                    NAME: 'posts',
                    PATH: 'posts',
                    CHILDREN: {
                        POST: {
                            NAME: 'posts',
                            PATH: ''
                        },
                        POSTS_DETAILS: {
                            NAME: 'post-details',
                            PATH: 'details'
                        }
                    }
                },
                TEAM: {
                    HEADER_ROOT: 'organization/team',
                    NAME: 'team',
                    PATH: 'team',
                    CHILDREN: {
                        MEMBER_LIST: {
                            NAME: 'member-list',
                            PATH: ''
                        },
                        MEMBER_DETAILS: {
                            NAME: 'member-details',
                            PATH: 'details'
                        }
                    }
                },
                PARTNERSHIP: {
                    NAME: 'partnership',
                    PATH: 'partnership'
                }
            }
        },
        PROFIL: {
            NAME: 'profil',
            PATH: 'profil'
        },
        SETTINGS: {
            NAME: 'settings',
            PATH: 'settings'
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
