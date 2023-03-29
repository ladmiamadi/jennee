import PropTypes from 'prop-types'
/**
Represents the SignUpValidator function.
@param {object} formData - An object containing the form data to be validated.
@param {object} error - An object containing any errors in the form.
@param {function} setError - A function to set the error state.
@param {object} errortype - An object containing any errors in the form field types.
@param {function} setErrortype - A function to set the errortype state.
@returns {boolean} - A boolean value indicating whether the form data is valid or not.
*/
const SignUpValidator = (formData, error, setError, errortype, setErrortype) => {
    const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[\w!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/
    let isValid = true
    for (const field in formData) {
        if (field === 'description' && formData.description === '') {
            console.log(formData.description)
            setError((prevError) => ({
                ...prevError,
                description: false
            }))
            setErrortype((prevErrortype) => ({
                ...prevErrortype,
                description: ''
            }))
            isValid = true
        } else if (field === 'siret_number' && formData.siret_number === '') {
            console.log(formData.siret_number)
            setError((prevError) => ({
                ...prevError,
                siret_number: false
            }))
            setErrortype((prevErrortype) => ({
                ...prevErrortype,
                siret_number: ''
            }))
            isValid = true
        } else if (formData[field] === '') {
            setError((prevError) => ({
                ...prevError,
                [field]: true
            }))
            setErrortype((prevErrortype) => ({
                ...prevErrortype,
                [field]: '*champ de texte requis'
            }))
            isValid = false
        } else if (field === 'email' && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(formData.email)) {
            setError((prevError) => ({
                ...prevError,
                email: true
            }))
            setErrortype((prevErrortype) => ({
                ...prevErrortype,
                email: '*adresse email invalide'
            }))
            isValid = false
        } else if (field === 'siret_number' && formData.siret_number !== '123456') {
            setError((prevError) => ({
                ...prevError,
                siret_number: true
            }))
            setErrortype((prevErrortype) => ({
                ...prevErrortype,
                siret_number: '*SIRET invalide'
            }))
            isValid = false
        } else if (!passwordRegex.test(formData.password)) {
            // charactère spéciaux
            setError((prevError) => ({
                ...prevError,
                password: true
            }))
            setErrortype((prevErrortype) => ({
                ...prevErrortype,
                password: '8 charactères avec un chiffre,Maj, Min et un charactère spécial'
            }))
            isValid = false
        } else if (formData[field] !== '') {
            setError((prevError) => ({
                ...prevError,
                [field]: false
            }))
            setErrortype((prevErrortype) => ({
                ...prevErrortype,
                [field]: ''
            }))
            isValid = true
        }
    }

    const requiredFields = Object.keys(formData).filter((field) => field !== 'description' && field !== 'siret_number')
    const isAllFieldsFilled = requiredFields.every((field) => formData[field] !== '')

    if (!isAllFieldsFilled) {
        isValid = false
    }

    const MAX_FILE_SIZE = 4 * 1000000 // 4MB in bytes

    if (formData.banner && formData.banner.size > MAX_FILE_SIZE) {
        setError((prevError) => ({
            ...prevError,
            banner: true
        }))
        setErrortype((prevErrortype) => ({
            ...prevErrortype,
            banner: '*La taille du fichier ne doit pas dépasser 4Mo'
        }))
        isValid = false
    }

    return isValid
}

SignUpValidator.propTypes = {
    error: PropTypes.object,
    setError: PropTypes.func,
    errortype: PropTypes.object,
    setErrortype: PropTypes.func,
    formData: PropTypes.object
}

export default SignUpValidator
