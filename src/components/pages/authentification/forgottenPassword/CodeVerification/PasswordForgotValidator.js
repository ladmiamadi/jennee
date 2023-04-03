import PropTypes from 'prop-types'
/**
Represents the PasswordForgotValidator function.
@param {object} formData - An object containing the form data to be validated.
@param {object} error - An object containing any errors in the form.
@param {function} setError - A function to set the error state.
@param {object} errortype - An object containing any errors in the form field types.
@param {function} setErrorType - A function to set the errortype state.
@returns {boolean} - A boolean value indicating whether the form data is valid or not.
*/
const PasswordForgotValidator = (formValue, error, setError, errortype, setErrorType) => {
    let isValid = true
    for (const field in formValue) {
        if (formValue[field] === '') {
            setError((prevError) => ({
                ...prevError,
                [field]: true
            }))
            setErrorType((prevErrortype) => ({
                ...prevErrortype,
                [field]: '*champ de texte requis'
            }))
            isValid = false
        } else if (field === 'email' && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(formValue.email)) {
            setError((prevError) => ({
                ...prevError,
                email: true
            }))
            setErrorType((prevErrortype) => ({
                ...prevErrortype,
                email: '*adresse email invalide'
            }))
            isValid = false
        } else if (field === 'validation' && formValue[field].length !== 6) {
            setError((prevError) => ({
                ...prevError,
                validation: true
            }))
            setErrorType((prevErrortype) => ({
                ...prevErrortype,
                validation: '*Le code de validation doit contenir 6 caractères'
            }))
            isValid = false
        } else if (field === 'validation' && formValue[field] !== '123456') {
            setError((prevError) => ({
                ...prevError,
                validation: true
            }))
            setErrorType((prevErrortype) => ({
                ...prevErrortype,
                validation: 'code invalide'
            }))
            isValid = false
        } else if (field === 'email' && formValue.email !== 'a@gmail.com') {
            setError((prevError) => ({
                ...prevError,
                email: true
            }))
            setErrorType((prevErrortype) => ({
                ...prevErrortype,
                email: "*l'adresse mail n'est pas associé à un compte"
            }))
            isValid = false
        } else {
            setError((prevError) => ({
                ...prevError,
                [field]: false
            }))
            setErrorType((prevErrortype) => ({
                ...prevErrortype,
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
    errortype: PropTypes.object,
    setErrorType: PropTypes.func,
    formValue: PropTypes.object
}

export default PasswordForgotValidator
