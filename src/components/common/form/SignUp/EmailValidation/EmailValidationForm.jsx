import React from 'react'
import PropTypes from 'prop-types'
import Input from '@common/input/Input.jsx'
import { INPUT } from '@constants/inputConst'
import Button from '@common/button/Button'
/**
 * A form for email validation.
 @param {object} props - The props object.
 @param {string} name - The name of the form.
 @param {string} className - The class name for the form.
 @param {function} HandleSubmit - The callback function to handle form submission.
 @param {function} handleChange - The callback function to handle form field changes.
 @param {object} formValue - The current form values.
 @param {function} setFormValue - The function to set form values.
 @param {object} error - The current form errors.
 @param {object} errorType - The error messages for each form field.
 @returns {JSX.Element} - The EmailValidationForm component.
 */
const EmailValidationForm = ({ formValue, setFormValue, handleChange, HandleSubmit, className, name, error, errorType }) => {
    return (
        <>
            <form name={name} className={className} onSubmit={HandleSubmit} noValidate>
                <Input
                    className="card__form-code"
                    required={true}
                    name={!error.code ? 'input' : 'input-error'}
                    type="text"
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.VALIDATION.CODE.NAME
                    }}
                    value={formValue.code}
                    onChange={handleChange}
                    placeholder="Code à 6 chiffres"
                />
                {error.code ? <label className="card__error">{errorType.code}</label> : ''}

                <Button className="card__form-submit" name="Valider l’inscription"></Button>
            </form>
        </>
    )
}

EmailValidationForm.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object,
    errorType: PropTypes.object
}

export default EmailValidationForm
