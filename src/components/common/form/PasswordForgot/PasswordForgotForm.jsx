import React from 'react'
import PropTypes from 'prop-types'
import Input from '@common/input/Input.jsx'
import { INPUT } from '@constants/inputConst'
import Button from '@common/button/Button'

/**
 * A React functional component for rendering a new password for the Password Forgot Form
 @param {Object} props - The props object containing the formValue, setFormValue, handleChange, HandleSubmit, className, and name props.
 @param {Object} formValue - An object containing the values of the new password form fields.
 @param {function} setFormValue - The function to be called when updating the values of the new password form fields.
 @param {function} handleChange - The function to be called when a new password form field value changes.
 @param {function} HandleSubmit - The function to be called when the new password form is submitted.
 @param {string} className - The CSS class(es) to be applied to the new password form.
 @param {string} name - The name of the new password form.
 @param {Object} error - An object containing error messages for the new password form fields.
 @returns {JSX.Element} - A new password form with a code input field and a submit button.
 */

const PasswordForgotForm = ({ formValue, setFormValue, handleChange, HandleSubmit, className, name, error }) => {
    return (
        <>
            <form name={name} className={className} onSubmit={HandleSubmit} noValidate>
                <Input
                    required={true}
                    name={!error.email ? 'input' : 'input-error'}
                    type="email"
                    value={formValue.email}
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.PASSWORD_FORGOT.EMAIL.NAME
                    }}
                    onChange={handleChange}
                    placeholder="Adresse mail"
                />
                {error.email ? <label className="card__error">{error.email}</label> : ''}
                <Button className="card__form-submit" name="Passer à l'étape suivante"></Button>
            </form>
        </>
    )
}

PasswordForgotForm.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object
}

export default PasswordForgotForm
