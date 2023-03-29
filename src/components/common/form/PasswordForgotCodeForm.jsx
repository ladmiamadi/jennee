import React from 'react'
import PropTypes from 'prop-types'
import '../../../assets/styles/pages/login/index.scss'
import Input from '../input/Input.jsx'
import { INPUT } from '../../../constants/inputConst'
import Button from '../button/Button'

/**
 * A React functional component for rendering a new code for the Password Forgot Code Form
 @param {Object} props - The props object containing the formValue, setFormValue, handleChange, HandleSubmit, className, and name props.
 @param {Object} formValue - An object containing the values of the new password code form fields.
 @param {function} setFormValue - The function to be called when updating the values of the new password code form fields.
 @param {function} handleChange - The function to be called when a new password form field value changes.
 @param {function} HandleSubmit - The function to be called when the new password code form is submitted.
 @param {string} className - The CSS class(es) to be applied to the new password code form.
 @param {string} name - The name of the new password form code.
 @param {Object} error - An object containing error messages for the new password form code fields.
 @param {function} setError - The function to be called when updating the error messages for the new password code form fields.
 @param {Object} errortype - An object containing error types for the new password form code fields.
 @param {function} setErrortype - The function to be called when updating the error types for the new password code form fields.
 @returns {JSX.Element} - A new password form with a code input field and a submit button.
 */
const PasswordForgotCodeForm = ({
    formValue,
    setFormValue,
    handleChange,
    HandleSubmit,
    className,
    name,
    error,
    setError,
    errortype,
    setErrortype
}) => {
    return (
        <>
            <form name={name} className={className} onSubmit={HandleSubmit} noValidate>
                <Input
                    required={true}
                    name={!error.validation ? 'input' : 'input-error'}
                    type="text"
                    value={formValue.validation}
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.PASSWORD_FORGOT.PASSWORD_FORGOT_CODE.NAME
                    }}
                    onChange={handleChange}
                    placeholder="Code à 6 chiffres"
                />
                {error.validation ? <label className="card__error">{error.validation}</label> : ''}
                <Button className="card__form-submit" name="Passer à l'étape suivante"></Button>
            </form>
        </>
    )
}

PasswordForgotCodeForm.propTypes = {
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

export default PasswordForgotCodeForm
