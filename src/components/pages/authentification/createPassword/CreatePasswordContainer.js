import React, { useState } from 'react'
import NewMemberComponent from './CodeVerification/NewMemberComponent'
import { HandleChange } from '@utils/HandleChange'
import CreatePasswordComponent from './CreatePasswordComponent'
import Success from './CreatePassword/Success'
import NewMemberValidator from './CodeVerification/NewMemberValidator'
/**
 * Container component for creating a new member.
 * @return {JSX.Element} The JSX code for the container component.
 */

const CreatePasswordContainer = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formSuccess, setFormSucces] = useState(false)
    const [error, setError] = useState({
        code: false,
        password: false,
        confirm_password: false
    })
    const [errorType, setErrorType] = useState({
        code: '',
        password: '',
        confirm_password: ''
    })
    const [formValue, setFormValue] = useState({
        code: '',
        password: '',
        confirm_password: ''
    })
    const { code } = formValue
    const { password, confirm_password } = formValue
    const formDataStepOne = { code }
    const formDataStepTwo = { password, confirm_password }

    const HandleSubmit = (event) => {
        event.preventDefault()
        if (formSubmitted === false) {
            if (NewMemberValidator(formDataStepOne, error, setError, errorType, setError)) {
                setFormSubmitted(true)
            }
        } else {
            if (NewMemberValidator(formDataStepTwo, error, setError, errorType, setError)) {
                setFormSucces(true)
            }
        }
    }
    return (
        <>
            {formSubmitted ? (
                <>
                    {formSuccess ? (
                        <>
                            <Success />
                        </>
                    ) : (
                        <CreatePasswordComponent
                            handleChange={HandleChange}
                            formValue={formValue}
                            setFormValue={setFormValue}
                            HandleSubmit={HandleSubmit}
                            error={error}
                            setError={setError}
                            errorType={errorType}
                            setErrortype={setErrorType}
                        />
                    )}
                </>
            ) : (
                <NewMemberComponent
                    handleChange={HandleChange}
                    formValue={formValue}
                    setFormValue={setFormValue}
                    HandleSubmit={HandleSubmit}
                    error={error}
                    setError={setError}
                    errorType={errorType}
                    setErrorType={setErrorType}
                />
            )}
        </>
    )
}

export default CreatePasswordContainer
