import React from 'react'
import PropTypes from 'prop-types'
import '../../../assets/styles/pages/login/index.scss'
import Input from '../input/Input.jsx'
import { INPUT } from '../../../constants/inputConst'
import Button from '../button/Button'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'

/**
 * A React functional component for rendering a SignIn Form
 @param {Object} props - The props object containing the formValue, setFormValue, handleChange, HandleSubmit, className, and name props.
 @param {Object} formValue - An object containing the values of the SignIn form fields.
 @param {function} setFormValue - The function to be called when updating the values of the SignIn form fields.
 @param {function} handleChange - The function to be called when a SignIn form field value changes.
 @param {function} HandleSubmit - The function to be called when the SignIn form is submitted.
 @param {string} className - The CSS class(es) to be applied to the SignIn form.
 @param {string} name - The name of the SignIn form.
 @param {Object} error - An object containing error messages for the SignIn form fields.
 @param {function} setError - The function to be called when updating the error messages for the SignIn form fields.
 @param {Object} errortype - An object containing error types for the SignIn form fields.
 @param {function} setErrortype - The function to be called when updating the error types for the SignIn form fields.
 @returns {JSX.Element} - A SignIn form with a code input field and a submit button.
 */

const SignInForm = ({ formValue, setFormValue, handleChange, HandleSubmit, className, name, error, setError, errortype, setErrortype }) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const handleVisibilityToggle = () => {
        setIsVisible(!isVisible)
    }

    return (
        <>
            <form name={name} className={className} onSubmit={HandleSubmit} noValidate>
                <Input
                    required={true}
                    name={!error.email ? 'input' : 'input-error'}
                    type="email"
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.SIGN_IN.EMAIL.NAME
                    }}
                    value={formValue.email}
                    onChange={handleChange}
                    placeholder="Identifiant ou addresse email"
                />
                {error.email ? <label className="card__error">{errortype.email}</label> : ''}
                <Input
                    required={true}
                    name={!error.password ? 'input' : 'input-error'}
                    type={isVisible ? 'text' : 'password'}
                    value={formValue.password}
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.SIGN_IN.PASSWORD.NAME
                    }}
                    onChange={handleChange}
                    placeholder="Mot de passe"
                />
                <span aria-hidden="true" className="visibility-off-signin" onClick={handleVisibilityToggle}>
                    {isVisible ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                </span>

                {error.password ? <label className="card__error">{errortype.password}</label> : ''}
                <Button className="card__form-submit" name="Se connecter"></Button>
            </form>
        </>
    )
}

SignInForm.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object,
    setError: PropTypes.func,
    errortype: PropTypes.object,
    setErrortype: PropTypes.func
}

export default SignInForm
