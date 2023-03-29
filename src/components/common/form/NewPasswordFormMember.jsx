import React from 'react'
import PropTypes from 'prop-types'
import '../../../assets/styles/pages/login/index.scss'
import Input from '../input/Input.jsx'
import { INPUT } from '../../../constants/inputConst'
import Button from '../button/Button'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
/**
 * A React functional component for rendering a new password for the member form
 @param {Object} props - The props object containing the formValue, setFormValue, handleChange, HandleSubmit, className, and name props.
 @param {Object} formValue - An object containing the values of the new password form fields.
 @param {function} setFormValue - The function to be called when updating the values of the new password form fields.
 @param {function} handleChange - The function to be called when a new password form field value changes.
 @param {function} HandleSubmit - The function to be called when the new password form is submitted.
 @param {string} className - The CSS class(es) to be applied to the new password form.
 @param {string} name - The name of the new password form.
 @param {Object} error - An object containing error messages for the new password form fields.
 @param {function} setError - The function to be called when updating the error messages for the new password form fields.
 @param {Object} errortype - An object containing error types for the new password form fields.
 @param {function} setErrortype - The function to be called when updating the error types for the new password form fields.
 @returns {JSX.Element} - A new password form with a code input field and a submit button.
 */

const NewPasswordFormMember = ({
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
    console.log(error)
    const [isVisible, setIsVisible] = React.useState(false)
    const handleVisibilityToggle = () => {
        setIsVisible(!isVisible)
    }
    return (
        <>
            <form name={name} className={className} onSubmit={HandleSubmit} noValidate>
                <Input
                    className="card__form-code"
                    required={true}
                    name={!error.password ? 'input' : 'input-error'}
                    type={isVisible ? 'text' : 'password'}
                    value={formValue.password}
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.NEW_MEMBER.PASSWORD.NAME
                    }}
                    onChange={handleChange}
                    placeholder="Mot de passe"
                />
                {error.password ? (
                    <label className="card__error">{error.password}</label>
                ) : (
                    <label htmlFor="password-member" className="card__label-input-password-member">
                        *au moins 8 charactères dont un chiffre, une lettre Maj et Min
                    </label>
                )}
                <span aria-hidden="true" className="visibility-off-newmember" onClick={handleVisibilityToggle}>
                    {isVisible ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                </span>

                <Input
                    className="card"
                    required={true}
                    name={!error.confirm_password ? 'input' : 'input-error'}
                    type={isVisible ? 'text' : 'password'}
                    value={formValue.confirm_password}
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.NEW_MEMBER.PASSWORD_CONFIRMATION.NAME
                    }}
                    onChange={handleChange}
                    placeholder="Vérifier votre nouveau mot de passe"
                />
                {error.confirm_password ? <label className="card__error">{error.confirm_password}</label> : ''}
                <Button className="card__form-submit" name="Valider l’inscription"></Button>
            </form>
        </>
    )
}

NewPasswordFormMember.propTypes = {
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

export default NewPasswordFormMember
