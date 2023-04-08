import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ROUTES } from '@constants/routesConst'
import SignInForm from '@common/form/SignIn/SignInForm'
import { Box, Typography } from '@mui/material'
/**
 The component for the sign in page.
 @typedef {Object} Props
 @property {Function} setFormValue - Function to set the state to form value.
 @property {Object} formValue - The current form value.
 @property {Function} HandleSubmit - Function to handle form submission.
 @property {Function} handleChange - Function to handle form input change.
 @param {Props} props - The props object containing the component's input data.
 @returns {JSX.Element} The Sign in component.
 */
const SignInComponent = ({ setFormValue, formValue, HandleSubmit, handleChange, error, setError, errorType, setErrorType }) => {
    return (
        <Box component={'div'} className="card ">
            <div className="card__header">
                <Typography className={'card__title'} variant={'h3'} component={'p'}>
                    Se connecter
                </Typography>
                <Typography variant={'subtitle1'} className="card__text" gutterBottom>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Vous n'avez pas de compte ?{' '}
                    <Link className="card__link" to={ROUTES.AUTHENTIFICATION.SIGN_UP.PATH}>
                        Inscrivez-vous
                    </Link>
                </Typography>
            </div>
            <div className="card__body">
                <SignInForm
                    className="card__form"
                    formValue={formValue}
                    setFormValue={setFormValue}
                    handleChange={handleChange}
                    name={'form'}
                    HandleSubmit={HandleSubmit}
                    error={error}
                    setError={setError}
                    errorType={errorType}
                    setErrorType={setErrorType}
                />
            </div>
            <Typography className="card__footer-title" variant={'body2'} gutterBottom>
                <Link to={ROUTES.AUTHENTIFICATION.FORGOTTEN_PASSWORD.PATH}>Mot de passe oublié ?</Link>
            </Typography>
        </Box>
    )
}

SignInComponent.propTypes = {
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object,
    setError: PropTypes.func,
    errorType: PropTypes.object,
    setErrorType: PropTypes.func
}

export default SignInComponent
