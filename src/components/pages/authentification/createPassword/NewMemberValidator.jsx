import PropTypes from 'prop-types'
/**
Represents the NewMemberValidator function.
@param {object} formData - An object containing the form data to be validated.
@param {object} error - An object containing any errors in the form.
@param {function} setError - A function to set the error state.
@param {object} errortype - An object containing any errors in the form field types.
@param {function} setErrortype - A function to set the errortype state.
@returns {boolean} - A boolean value indicating whether the form data is valid or not.
*/

const NewMemberValidator = (formData, error, setError, errortype, setErrortype) => {
    let isValid = true
    for (const field in formData) {
        if (formData[field] === '') {
            setError((prevError) => ({
                ...prevError,
                [field]: true
            }))
            setErrortype((prevErrortype) => ({
                ...prevErrortype,
                [field]: '*champ de texte requis'
            }))
            isValid = false
        } else if (field === 'code') {
            if (formData[field].length !== 6) {
                setError((prevError) => ({
                    ...prevError,
                    [field]: true
                }))
                setErrortype((prevErrortype) => ({
                    ...prevErrortype,
                    [field]: '*le code doit être de 6 caractères'
                }))
                isValid = false
            } else if (formData[field] !== '123456') {
                setError((prevError) => ({
                    ...prevError,
                    [field]: true
                }))
                setErrortype((prevErrortype) => ({
                    ...prevErrortype,
                    [field]: '*code invalide'
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
        } else if (field === 'password' || field === 'confirm_password') {
            const passwordRegex =
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[\w!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/
            if (!passwordRegex.test(formData[field])) {
                // charactère spéciaux
                setError((prevError) => ({
                    ...prevError,
                    password: true,
                    confirm_password: true
                }))
                setErrortype((prevErrortype) => ({
                    ...prevErrortype,
                    password: '8 charactères avec un chiffre,Maj, Min et un charactère spécial',
                    confirm_password: ' '
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

    if (formData.password !== formData.confirm_password) {
        setError((prevError) => ({
            ...prevError,
            password: true,
            confirm_password: true
        }))
        setErrortype((prevErrortype) => ({
            ...prevErrortype,
            password: '*les mots de passe ne correspondent pas',
            confirm_password: ' '
        }))
        isValid = false
    }

    return isValid
}

NewMemberValidator.propTypes = {
    error: PropTypes.object,
    setError: PropTypes.func,
    errortype: PropTypes.object,
    setErrortype: PropTypes.func,
    formData: PropTypes.object
}

export default NewMemberValidator
