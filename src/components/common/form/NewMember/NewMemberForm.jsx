import React from 'react'
import PropTypes from 'prop-types'
import Input from '@common/input/Input.jsx'
import { INPUT } from '@constants/inputConst'
import Button from '@common/button/Button'

/**
 * A React functional component for rendering a new member form.
 @param {Object} props - The props object containing the formValue, setFormValue, handleChange, HandleSubmit, className, and name props.
 @param {Object} formValue - An object containing the values of the new member form fields.
 @param {function} setFormValue - The function to be called when updating the values of the new member form fields.
 @param {function} handleChange - The function to be called when a new member form field value changes.
 @param {function} HandleSubmit - The function to be called when the new member form is submitted.
 @param {string} className - The CSS class(es) to be applied to the new member form.
 @param {string} name - The name of the new member form.
 @param {Object} error - An object containing error messages for the new member form fields.
 @returns {JSX.Element} - A new member form with a code input field and a submit button.
 */

const NewMemberForm = ({ formValue, setFormValue, handleChange, HandleSubmit, className, name, error }) => {
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
                        name: INPUT.NEW_MEMBER.CODE.NAME
                    }}
                    value={formValue.code}
                    onChange={handleChange}
                    placeholder="Code à 6 chiffres"
                />
                {error.code ? <label className="card__error">{error.code}</label> : ''}
                <Button className="card__form-submit" name="Passer à l’étape suivante"></Button>
            </form>
        </>
    )
}

NewMemberForm.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object
}

export default NewMemberForm
