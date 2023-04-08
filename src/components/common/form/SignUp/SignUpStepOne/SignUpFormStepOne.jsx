import React from 'react'
import PropTypes from 'prop-types'
import Input from '@common/input/Input'
import { INPUT } from '@constants/inputConst'
import Button from '@common/button/Button'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'

/**

SignUpFormStepOne component represents the first step of a sign-up form
@component
@param {object} props - The component props.
@param {string} props.name - The name of the form.
@param {string} props.className - The CSS class name for the form.
@param {function} props.HandleSubmit - The function to be called when the form is submitted.
@param {function} props.handleChange - The function to be called when the input value changes.
@param {object} props.formValue - The current state of the form.
@param {function} props.setFormValue - The function to update the state of the form.
@param {object} props.error - The error state for the form inputs.
@param {object} props.errorType - The error messages for the form inputs.
@return {JSX.Element} - The rendered component.
*/

const SignUpFormStepOne = ({ formValue, setFormValue, handleChange, HandleSubmit, className, name, error, errorType }) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const handleVisibilityToggle = () => {
        setIsVisible(!isVisible)
    }
    return (
        <form name={name} className={className} onSubmit={HandleSubmit} noValidate>
            <Input
                required={true}
                name={!error.name ? 'input' : 'input-error'}
                type="text"
                dataOnChange={{
                    state: formValue,
                    setState: setFormValue,
                    name: INPUT.SIGN_UP.PERSONAL_INFO.NAME.NAME
                }}
                value={formValue.name}
                onChange={handleChange}
                placeholder="Nom"
            />
            {error.name ? <label className="card__error">{errorType.name}</label> : ''}
            <Input
                required={true}
                name={!error.surname ? 'input' : 'input-error'}
                type="text"
                value={formValue.surname}
                dataOnChange={{
                    state: formValue,
                    setState: setFormValue,
                    name: INPUT.SIGN_UP.PERSONAL_INFO.SURNAME.NAME
                }}
                onChange={handleChange}
                placeholder="Prénom"
            />
            {error.surname ? <label className="card__error">{errorType.surname}</label> : ''}
            <Input
                required={false}
                name={!error.school ? 'input' : 'input-error'}
                type="text"
                value={formValue.school}
                dataOnChange={{
                    state: formValue,
                    setState: setFormValue,
                    name: INPUT.SIGN_UP.PERSONAL_INFO.SCHOOL.NAME
                }}
                onChange={handleChange}
                placeholder="École"
            />
            {error.school ? <label className="card__error">{errorType.school}</label> : ''}

            <Input
                required={true}
                name={!error.email ? 'input' : 'input-error'}
                type="email"
                value={formValue.email}
                dataOnChange={{
                    state: formValue,
                    setState: setFormValue,
                    name: INPUT.SIGN_UP.PERSONAL_INFO.EMAIL.NAME
                }}
                onChange={handleChange}
                placeholder="Adresse mail"
            />
            {error.email ? <label className="card__error">{errorType.email}</label> : ''}
            <Input
                required={true}
                name={!error.password ? 'input' : 'input-error'}
                type={isVisible ? 'text' : 'password'}
                value={formValue.password}
                dataOnChange={{
                    state: formValue,
                    setState: setFormValue,
                    name: INPUT.SIGN_UP.PERSONAL_INFO.PASSWORD.NAME
                }}
                onChange={handleChange}
                placeholder="Mot de passe "
                childrenOnClick={handleVisibilityToggle}>
                {isVisible ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
            </Input>
            {error.password ? (
                <label className="card__error">{errorType.password}</label>
            ) : (
                <label htmlFor="input-password" className="card__label-input-password">
                    *au moins 8 charactères dont un chiffre, une lettre Maj et Min
                </label>
            )}
            <Button className="card__form-submit" name="Passer à l'étape suivante"></Button>
        </form>
    )
}

SignUpFormStepOne.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object,
    errorType: PropTypes.object
}

export default SignUpFormStepOne
