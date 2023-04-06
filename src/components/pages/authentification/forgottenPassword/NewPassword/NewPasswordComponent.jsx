import React from 'react'
import PropTypes from 'prop-types'
import NewPasswordForm from '@common/form/NewMember/NewPasswordForm'
import { Box, Typography } from '@mui/material'
/**
 Represents the CreatePasswordComponent functional component.
 @param {object} props - The props object containing the following properties:
 @param {function} setFormValue - A function to set the formValue state.
 @param {object} formValue - An object containing the current form values.
 @param {function} HandleSubmit - A function to handle the form submission.
 @param {function} handleChange - A function to handle the form field changes.
 @param {object} error - An object containing any errors in the form.
 @param {function} setError - A function to set the error state.
 @param {object} errorType - An object containing any errors in the form field types.
 @param {function} setErrorType - A function to set the errorType state.
 @returns {JSX.Element} - A React JSX element that renders the CreatePasswordComponent.
 */
const NewPasswordComponent = ({ setFormValue, formValue, HandleSubmit, handleChange, error, setError, errorType, setErrorType }) => {
    return (
        <Box component={'div'} className="card">
            <div className="card__header">
                <Typography className={'card__title'} variant={'h3'} component={'p'}>
                    Mot de passe oublier
                </Typography>
                <Typography variant={'subtitle1'} className="card__text" gutterBottom>
                    Créer un nouveau mot de passe
                </Typography>
            </div>
            <div className="card__body">
                <NewPasswordForm
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

NewPasswordComponent.propTypes = {
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object,
    setError: PropTypes.func,
    errorType: PropTypes.object,
    setErrorType: PropTypes.func
}

export default NewPasswordComponent
