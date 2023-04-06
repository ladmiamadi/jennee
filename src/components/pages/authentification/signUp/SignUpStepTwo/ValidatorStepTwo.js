import PropTypes from 'prop-types'

/**
 * Represents the ValidatorStepTwo function.
 * @param {object} formData - An object containing the form data to be validated.
 * @param {object} error - An object containing any errors in the form.
 * @param {function} setError - A function to set the error state.
 * @param {object} errortype - An object containing any errors in the form field types.
 * @param {function} setErrorType - A function to set the errortype state.
 * @returns {boolean} - A boolean value indicating whether the form data is valid or not.
 */
const ValidatorStepTwo = (formData, error, setError, errortype, setErrorType) => {
    let isValid = true

    for (const field in formData) {
        if (field === 'description' || field === 'siret_number') {
            // Si le champ est facultatif et vide, on passe à la prochaine itération
            if (formData[field] === '') {
                continue
            }
        }

        if (formData[field] === '') {
            setError((prevError) => ({
                ...prevError,
                [field]: true
            }))
            setErrorType((prevErrortype) => ({
                ...prevErrortype,
                [field]: '*champ de texte requis'
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
        }
    }

    if (formData.siret_number !== '') {
        const siretRegexp = /^[0-9]{14}$/ // RegExp to validate siret_number
        if (formData.siret_number !== '123456') {
            setError((prevError) => ({
                ...prevError,
                siret_number: true
            }))
            setErrorType((prevErrortype) => ({
                ...prevErrortype,
                siret_number: '*siret invalide'
            }))
            isValid = false
        }
    }

    return isValid
}

ValidatorStepTwo.propTypes = {
    error: PropTypes.object,
    setError: PropTypes.func,
    errortype: PropTypes.object,
    setErrorType: PropTypes.func,
    formData: PropTypes.object
}

export default ValidatorStepTwo
