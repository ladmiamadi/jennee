import React, { useState } from 'react'
import NewMemberComponent from './NewMemberComponent'
import { HandleChange } from '../../../../utils/HandleChange'
import NewPasswordComponentMember from './NewPasswordComponentMember'
import Success from './Success'
import NewMemberValidator from './NewMemberValidator'
/**
 * Container component for creating a new member.
 * @return {JSX.Element} The JSX code for the container component.
 */

const NewMemberContainer = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formSuccess, setFormSucces] = useState(false)
    const [error, setError] = useState({
        code: false,
        password: false,
        confirm_password: false
    })
    const [errortype, setErrortype] = useState({
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
            if (NewMemberValidator(formDataStepOne, error, setError, errortype, setError)) {
                setFormSubmitted(true)
            }
        } else {
            if (NewMemberValidator(formDataStepTwo, error, setError, errortype, setError)) {
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
                        <NewPasswordComponentMember
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
            ) : (
                <NewMemberComponent
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

export default NewMemberContainer
