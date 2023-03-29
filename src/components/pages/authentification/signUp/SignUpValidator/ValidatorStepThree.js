import PropTypes from 'prop-types'

/**
 * Represents the ValidatorStepTwo function.
 * @param {object} formData - An object containing the form data to be validated.
 * @param {object} error - An object containing any errors in the form.
 * @param {function} setError - A function to set the error state.
 * @param {object} errortype - An object containing any errors in the form field types.
 * @param {function} setErrortype - A function to set the errortype state.
 * @returns {boolean} - A boolean value indicating whether the form data is valid or not.
 */
const ValidatorStepThree = (formData, error, setError, errortype, setErrortype) => {
    let isValid = true

    // Fonction pour vérifier si tous les éléments sont vides
    const areAllFieldsEmpty = () => {
        for (const field in formData) {
            if (formData[field] !== '') {
                return false
            }
        }
        return true
    }

    if (areAllFieldsEmpty()) {
        console.log('all fields empty')
        for (const field in formData) {
            setError((prevError) => ({
                ...prevError,
                [field]: true
            }))
            setErrortype((prevErrortype) => ({
                ...prevErrortype,
                [field]: '*champ de texte requis'
            }))
            isValid = false
        }
    } else {
        for (const field in formData) {
            if (formData[field] === '') {
                console.log('error')
                setError((prevError) => ({
                    ...prevError,
                    [field]: true
                }))
                setErrortype((prevErrortype) => ({
                    ...prevErrortype,
                    [field]: '*champ de texte requis'
                }))
                isValid = false
            } else {
                setError((prevError) => ({
                    ...prevError,
                    [field]: false
                }))
                setErrortype((prevErrortype) => ({
                    ...prevErrortype,
                    [field]: ''
                }))
            }
        }
    }

    return isValid
}

ValidatorStepThree.propTypes = {
    error: PropTypes.object,
    setError: PropTypes.func,
    errortype: PropTypes.object,
    setErrortype: PropTypes.func,
    formData: PropTypes.object
}

export default ValidatorStepThree
