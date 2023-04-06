import React from 'react'
import PropTypes from 'prop-types'
import PasswordForgotForm from '@common/form/PasswordForgot/PasswordForgotForm'
import { Box, Typography } from '@mui/material'
/**
 Represents the PasswordForgotComponent functional component.
 @param {object} props - The props object containing the following properties:
 @param {function} setFormValue - A function to set the formValue state.
 @param {object} formValue - An object containing the current form values.
 @param {function} HandleSubmit - A function to handle the form submission.
 @param {function} handleChange - A function to handle the form field changes.
 @param {object} error - An object containing any errors in the form.
 @param {function} setError - A function to set the error state.
 @param {object} errorType - An object containing any errors in the form field types.
 @param {function} setErrorType - A function to set the errorType state.
 @returns {JSX.Element} - A React JSX element that renders the PasswordForgotComponent.
 */
const PasswordForgotComponent = ({ setFormValue, formValue, HandleSubmit, handleChange, error, setError, errorType, setErrorType }) => {
    return (
        <Box component={'div'} className="card">
            <div className="card__header">
                <Typography className={'card__title'} variant={'h3'} component={'p'}>
                    Mot de passe oublier
                </Typography>
                <Typography variant={'subtitle1'} className="card__text" gutterBottom>
                    Veuillez renseigner l adresse e-mail du compte
                </Typography>
            </div>
            <div className="card__body">
                <PasswordForgotForm
                    formValue={formValue}
                    setFormValue={setFormValue}
                    handleChange={handleChange}
                    className={'card__form'}
                    name={'form'}
                    HandleSubmit={HandleSubmit}
                    error={error}
                    setError={setError}
                    errorType={errorType}
                    setErrorType={setErrorType}
                />
            </div>
        </Box>
    )
}

PasswordForgotComponent.propTypes = {
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object,
    setError: PropTypes.func,
    errorType: PropTypes.object,
    setErrorType: PropTypes.func
}

export default PasswordForgotComponent
