import PropTypes from 'prop-types'
import { AUTHENTIFICATION } from '@constants/authentificationConst'
/**
 Represents the PasswordForgotValidator function.
 @param formValue
 @param {object} error - An object containing any errors in the form.
 @param {function} setError - A function to set the error state.
 @param {object} errorType - An object containing any errors in the form field types.
 @param {function} setErrorType - A function to set the errorType state.
 @returns {boolean} - A boolean value indicating whether the form data is valid or not.
 */
const PasswordForgotValidator = (formValue, error, setError, errorType, setErrorType) => {
    let isValid = true
    for (const field in formValue) {
        if (formValue[field] === '') {
            setError((prevError) => ({
                ...prevError,
                [field]: true
            }))
            setErrorType((prevErrorType) => ({
                ...prevErrorType,
                [field]: '*champ de texte requis'
            }))
            isValid = false
        } else if (field === 'email' && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(formValue.email)) {
            setError((prevError) => ({
                ...prevError,
                email: true
            }))
            setErrorType((prevErrorType) => ({
                ...prevErrorType,
                email: '*adresse email invalide'
            }))
            isValid = false
        } else if (field === 'validation' && formValue[field].length !== 6) {
            setError((prevError) => ({
                ...prevError,
                validation: true
            }))
            setErrorType((prevErrorType) => ({
                ...prevErrorType,
                validation: '*Le code de validation doit contenir 6 caractères'
            }))
            isValid = false
        } else if (field === 'validation' && formValue[field] !== AUTHENTIFICATION.FORGOTTEN_PASSWORD.code) {
            setError((prevError) => ({
                ...prevError,
                validation: true
            }))
            setErrorType((prevErrorType) => ({
                ...prevErrorType,
                validation: 'code invalide'
            }))
            isValid = false
        } else if (field === 'email' && formValue.email !== AUTHENTIFICATION.FORGOTTEN_PASSWORD.email) {
            setError((prevError) => ({
                ...prevError,
                email: true
            }))
            setErrorType((prevErrorType) => ({
                ...prevErrorType,
                email: "*l'adresse mail n'est pas associé à un compte"
            }))
            isValid = false
        } else {
            setError((prevError) => ({
                ...prevError,
                [field]: false
            }))
            setErrorType((prevErrorType) => ({
                ...prevErrorType,
                [field]: ''
            }))
            isValid = true
        }
    }
    return isValid
}

PasswordForgotValidator.propTypes = {
    error: PropTypes.object,
    setError: PropTypes.func,
    errorType: PropTypes.object,
    setErrorType: PropTypes.func,
    formValue: PropTypes.object
}

export default PasswordForgotValidator
