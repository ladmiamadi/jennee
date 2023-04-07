import PropTypes from 'prop-types'

const SignInValidator = (formValue, error, setError, errorType, setErrorType) => {
    const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[\w!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/
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
        } else if (field === 'email' && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(formValue.email)) {
            setError((prevError) => ({
                ...prevError,
                email: true
            }))
            setErrorType((prevErrortype) => ({
                ...prevErrortype,
                email: '*adresse email invalide'
            }))
        } else if (!passwordRegex.test(formValue.password)) {
            // charactère spéciaux
            setError((prevError) => ({
                ...prevError,
                password: true
            }))
            setErrorType((prevErrortype) => ({
                ...prevErrortype,
                password: '8 charactères avec un chiffre,Maj, Min et un charactère spécial'
            }))
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
}

SignInValidator.propTypes = {
    error: PropTypes.object,
    setError: PropTypes.func,
    errorType: PropTypes.object,
    setErrorType: PropTypes.func,
    formValue: PropTypes.object
}

export default SignInValidator
