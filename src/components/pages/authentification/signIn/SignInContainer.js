import React, { useState } from 'react'
import SignInComponent from './SignInComponent'
import { HandleChange } from '@utils/HandleChange'
import SignInValidator from './SignInValidator'
/**
A container component that handles the state and functions for the SignInComponent
@return {JSX.Element} Returns the SignInComponent with the props required to handle form data
*/

const SignInContainer = () => {
    const [error, setError] = useState({
        email: false,
        password: false
    })
    const [errorType, setErrorType] = useState({
        email: '',
        password: ''
    })
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })
    /**Function to handle the form submission
    @param {Object} event - The event object from the form submission
  */

    const HandleSubmit = (event) => {
        event.preventDefault()
        SignInValidator(formValue, error, setError, errorType, setErrorType)
    }
    return (
        <SignInComponent
            handleChange={HandleChange}
            formValue={formValue}
            setFormValue={setFormValue}
            HandleSubmit={HandleSubmit}
            error={error}
            setError={setError}
            errorType={errorType}
            setErrorType={setErrorType}
        />
    )
}

export default SignInContainer
