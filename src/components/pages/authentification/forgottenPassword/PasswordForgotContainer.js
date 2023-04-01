import React, { useState } from 'react'
import PasswordForgotComponent from './PasswordForgotComponent.jsx'
import { HandleChange } from '@utils/HandleChange.js'
import PasswordForgotCodeComponent from './PasswordForgotCodeComponent.jsx'
import PasswordForgotValidator from './PasswordForgotValidator.js'
import NewPasswordComponent from './NewPasswordComponent.jsx'
import NewPasswordValidator from './NewPasswordValidator.js'
import Success from './Success.jsx'

/**
 * A container component that handles the state and functions for the PasswordForgotComponent
 * @return {JSX.Element} Returns the PasswordForgotComponent with the props required to handle form data
 */
const PasswordForgotContainer = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [stepOneCompleted, setStepOneCompleted] = useState(false)
    const [FormSuccess, setFormSuccess] = useState(false)
    const [error, setError] = useState({
        password: false,
        email: false,
        validation: false
    })
    const [errortype, setErrortype] = useState({
        password: '',
        email: '',
        validation: ''
    })
    const [formValue, setFormValue] = useState({
        password: '',
        email: '',
        validation: ''
    })

    const { email } = formValue
    const { validation } = formValue
    const { password } = formValue
    const formDataStepOne = { email }
    const formDataStepTwo = { validation }
    const formDataStepThree = { password }

    const HandleSubmit = (event) => {
        event.preventDefault()
        console.log(formValue)
        if (formSubmitted === false) {
            if (PasswordForgotValidator(formDataStepOne, error, setError, errortype, setError)) {
                setFormSubmitted(true)
            }
        } else {
            if (PasswordForgotValidator(formDataStepTwo, error, setError, errortype, setError)) {
                setStepOneCompleted(true)
            }
            if (stepOneCompleted) {
                // vérifie si l'étape 1 a été validée avant de permettre à l'utilisateur d'accéder à l'étape suivante

                if (NewPasswordValidator(formDataStepThree, error, setError, errortype, setError)) {
                    setFormSuccess(true)
                }
            }
        }
    }

    return (
        <>
            {formSubmitted ? (
                stepOneCompleted ? (
                    FormSuccess ? (
                        <Success />
                    ) : (
                        <NewPasswordComponent
                            handleChange={HandleChange}
                            formValue={formValue}
                            setFormValue={setFormValue}
                            HandleSubmit={HandleSubmit}
                            error={error}
                            setError={setError}
                            errortype={errortype}
                            setErrortype={setErrortype}
                        />
                    )
                ) : (
                    <PasswordForgotCodeComponent
                        handleChange={HandleChange}
                        formValue={formValue}
                        setFormValue={setFormValue}
                        HandleSubmit={HandleSubmit}
                        error={error}
                        setError={setError}
                        errortype={errortype}
                        setErrortype={setErrortype}
                    />
                )
            ) : (
                <PasswordForgotComponent
                    handleChange={HandleChange}
                    formValue={formValue}
                    setFormValue={setFormValue}
                    HandleSubmit={HandleSubmit}
                    error={error}
                    setError={setError}
                    errortype={errortype}
                    setErrortype={setErrortype}
                />
            )}
        </>
    )
}

export default PasswordForgotContainer
