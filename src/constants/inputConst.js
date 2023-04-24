/**
INPUT object with constants for form input names
@typedef {Object} INPUT
@property {Object} SIGN_IN - Input names for sign in form
@property {Object} SIGN_UP - Input names for sign up form
@property {Object} VALIDATION - Input names for validation form
@property {Object} PASSWORD_FORGOT - Input names for password forgot form
@property {Object} NEW_MEMBER - Input names for new member form
@property {Object} SIGN_IN.EMAIL - Input name for sign in email input
@property {Object} SIGN_IN.PASSWORD - Input name for sign in password input
@property {Object} SIGN_UP.PERSONAL_INFO - Input names for personal information section of sign up form
@property {Object} SIGN_UP.PERSONAL_INFO.NAME - Input name for sign up first name input
@property {Object} SIGN_UP.PERSONAL_INFO.SURNAME - Input name for sign up last name input
@property {Object} SIGN_UP.PERSONAL_INFO.SCHOOL - Input name for sign up school input
@property {Object} SIGN_UP.PERSONAL_INFO.EMAIL - Input name for sign up email input
@property {Object} SIGN_UP.PERSONAL_INFO.PASSWORD - Input name for sign up password input
@property {Object} SIGN_UP.STUDENTS_ORGANISATION - Input names for student organization section of sign up form
@property {Object} SIGN_UP.STUDENTS_ORGANISATION.CITY - Input name for sign up city input
@property {Object} SIGN_UP.STUDENTS_ORGANISATION.NAME_ORGANISATION - Input name for sign up organization name input
@property {Object} SIGN_UP.STUDENTS_ORGANISATION.ROLE_ORGANISATION - Input name for sign up organization role input
@property {Object} SIGN_UP.STUDENTS_ORGANISATION.SIRET_NUMBER - Input name for sign up organization SIRET number input
@property {Object} SIGN_UP.STUDENTS_ORGANISATION.DESCRIPTION - Input name for sign up organization description input
@property {Object} SIGN_UP.BANK_INFO - Input names for bank information section of sign up form
@property {Object} SIGN_UP.BANK_INFO.NAME_ACCOUNT_HOLDER - Input name for sign up account holder name input
@property {Object} SIGN_UP.BANK_INFO.BIC - Input name for sign up BIC input
@property {Object} SIGN_UP.BANK_INFO.RIB - Input name for sign up RIB input
@property {Object} SIGN_UP.LOGO - Input names for logo section of sign up form
@property {Object} SIGN_UP.LOGO.LOGO - Input name for sign up logo input
@property {Object} SIGN_UP.LOGO.BANNER - Input name for sign up banner input
@property {Object} VALIDATION.CODE - Input name for validation code input
@property {Object} PASSWORD_FORGOT.EMAIL - Input name for password forgot email input
@property {Object} PASSWORD_FORGOT.PASSWORD_FORGOT_CODE - Input name for password forgot validation code input
@property {Object} PASSWORD_FORGOT.NEW_PASSWORD - Input name for password forgot new password input
@property {Object} NEW_MEMBER.CODE - Input name for new member code input
@property {Object} NEW_MEMBER.PASSWORD - Input name for new member password input
@property {Object} NEW_MEMBER.PASSWORD_CONFIRMATION - Input name for new member password confirmation input
*/
export const INPUT = {
    SIGN_IN: {
        EMAIL: {
            NAME: 'email'
        },
        PASSWORD: {
            NAME: 'password'
        }
    },
    SIGN_UP: {
        PERSONAL_INFO: {
            NAME: {
                NAME: 'name'
            },
            SURNAME: {
                NAME: 'surname'
            },
            SCHOOL: {
                NAME: 'school'
            },
            EMAIL: {
                NAME: 'email'
            },
            PASSWORD: {
                NAME: 'password'
            }
        },
        STUDENTS_ORGANISATION: {
            CITY: {
                NAME: 'city'
            },
            NAME_ORGANISATION: {
                NAME: 'name_organisation'
            },
            ROLE_ORGANISATION: {
                NAME: 'role_organisation'
            },
            SIRET_NUMBER: {
                NAME: 'siret_number'
            },
            DESCRIPTION: {
                NAME: 'description'
            }
        },
        BANK_INFO: {
            NAME_ACCOUNT_HOLDER: {
                NAME: 'name_account_holder'
            },
            BIC: {
                NAME: 'bic'
            },
            RIB: {
                NAME: 'rib'
            }
        },
        LOGO: {
            LOGO: {
                NAME: 'logo'
            },
            BANNER: {
                NAME: 'banner'
            }
        }
    },
    VALIDATION: {
        CODE: {
            NAME: 'code'
        }
    },
    PASSWORD_FORGOT: {
        EMAIL: {
            NAME: 'email'
        },
        PASSWORD_FORGOT_CODE: {
            NAME: 'validation'
        },
        NEW_PASSWORD: {
            NAME: 'password'
        }
    },
    NEW_MEMBER: {
        CODE: {
            NAME: 'code'
        },
        PASSWORD: {
            NAME: 'password'
        },
        PASSWORD_CONFIRMATION: {
            NAME: 'confirm_password'
        }
    },
    MODAL: {
        NEW_EVENT: {
            NAME: 'name',
            DESCRIPTION: 'description',
            TYPE: 'type',
            EVENT: 'event',
            PLACE: 'place',
            AUTHORISATION: 'authorisation',
            PRESENTATION_COVER: 'presentationCover',
            PROMOTION_COVER: 'promotionCover',
            TOTAL_NUMBER_PLACES: 'totalNumberPlaces',
            OPENING: 'opening',
            ENDING: 'ending',
            TICKETING_OPENING: 'ticketingOpening',
            TICKETING_ENDING: 'ticketingEnding',
            PUBLICATION: 'publication'
        }
    }
}
