import PropTypes from 'prop-types'

/**
 * Represents the ValidatorStepOne function.
 * @param {object} formData - An object containing the form data to be validated.
 * @param {object} error - An object containing any errors in the form.
 * @param {function} setError - A function to set the error state.
 * @param {object} errortype - An object containing any errors in the form field types.
 * @param {function} setErrorType - A function to set the errortype state.
 * @returns {boolean} - A boolean value indicating whether the form data is valid or not.
 */
const ValidatorStepOne = (formData, error, setError, errortype, setErrorType) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/ // regex for valid email format
    const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[\w!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/
    let isValid = true
    console.log(formData)

    // Fonction pour vérifier si tous les éléments sont vides
    const areAllFieldsEmpty = () => {
        for (const field in formData) {
            if (formData[field] !== '') {
                return false
            }
        }
        return true
    }

    for (const field in formData) {
        if (areAllFieldsEmpty()) {
            console.log('all fields empty')
            isValid = false
        }
        if (formData[field] === '') {
            console.log('error')
            setError((prevError) => ({
                ...prevError,
                [field]: true
            }))
            setErrorType((prevErrortype) => ({
                ...prevErrortype,
                [field]: '*champ de texte requis'
            }))
            isValid = false
        } else if (field === 'email' && !emailRegex.test(formData[field])) {
            // check if email is valid
            console.log('invalid email')
            setError((prevError) => ({
                ...prevError,
                [field]: true
            }))
            setErrorType((prevErrortype) => ({
                ...prevErrortype,
                [field]: '*adresse email invalide'
            }))
            isValid = false
        } else if (field === 'password' && !passwordRegex.test(formData[field])) {
            console.log('invalid password')
            setError((prevError) => ({
                ...prevError,
                [field]: true
            }))
            setErrorType((prevErrortype) => ({
                ...prevErrortype,
                [field]: '*8 charactères avec un chiffre,Maj, Min et un charactère spécial'
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

ValidatorStepOne.propTypes = {
    error: PropTypes.object,
    setError: PropTypes.func,
    errortype: PropTypes.object,
    setErrorType: PropTypes.func,
    formData: PropTypes.object
}
export default ValidatorStepOne
