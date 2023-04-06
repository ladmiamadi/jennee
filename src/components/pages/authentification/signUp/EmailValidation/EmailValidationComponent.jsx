import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logo from '@layout/authLayout/header/logo'
import EmailValidationForm from '@common/form/SignUp/EmailValidation/EmailValidationForm'
import { Box, Grid, Typography } from '@mui/material'
import Layout from '@layout/shape/Layout'
import { ROUTES } from '@constants/routesConst'
/**
 Represents the EmailValidationComponent functional component.
 @param {object} props - The props object containing the following properties:
 @param {function} setFormValue - A function to set the formValue state.
 @param {object} formValue - An object containing the current form values.
 @param {function} HandleSubmit - A function to handle the form submission.
 @param {function} handleChange - A function to handle the form field changes.
 @param {object} error - An object containing any errors in the form.
 @param {function} setError - A function to set the error state.
 @param {object} errorType - An object containing any errors in the form field types.
 @param {function} setErrorType - A function to set the errorType state.
 @returns {JSX.Element} - A React JSX element that renders the EmailValidationComponent.
 */
const EmailValidationComponent = ({ setFormValue, formValue, HandleSubmit, handleChange, error, setError, errorType, setErrorType }) => {
    return (
        <Box component={'div'} className="card card">
            <div className="card__header">
                <Typography className={'card__title'} variant={'h3'} component={'p'}>
                    Un code vous a été envoyé sur votre adresse mail
                </Typography>
                <Typography variant={'subtitle1'} className="card__text" gutterBottom>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    veuillez renseigner le code recu sur votre adresse e-mail{' '}
                </Typography>
            </div>
            <div className="card__body">
                <EmailValidationForm
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
            <Link className="card__footer-title--tutorial" to={'/reset-code'}>
                Renvoyer le code
            </Link>
        </Box>
    )
}

EmailValidationComponent.propTypes = {
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object,
    setError: PropTypes.func,
    errorType: PropTypes.object,
    setErrorType: PropTypes.func
}

export default EmailValidationComponent
