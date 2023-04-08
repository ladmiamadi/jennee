import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ROUTES } from '@constants/routesConst'
import SignUpFormStepFour from '@common/form/SignUp/SignUpStepFour/SignUpFormStepFour'
import { Box, Typography } from '@mui/material'
/**
 A component for the fourth step of the Sign Up process.
 @param {Object} props - The component props.
 @param {Function} props.HandleSubmit - The function to handle form submission.
 @param {Function} props.handleChange - The function to handle input change.
 @param {Object} props.formValue - The form values.
 @param {Function} props.setFormValue - The function to set form values.
 @param {Function} props.HorizontalLabelPositionBelowStepper - The stepper component to display the progress.
 @param {Object} props.error - The errors in the form.
 @param {Function} props.setError - The function to set form errors.
 @param {Object} props.errorType - The error types in the form.
 @param {Function} props.setErrorType - The function to set error types in the form.
 @returns {JSX.Element} - The Sign Up Step Four component.
 */
const SignUpComponentStepFour = ({
    setFormValue,
    formValue,
    HandleSubmit,
    handleChange,
    page,
    HorizontalLabelPositionBelowStepper,
    error,
    setError,
    errorType,
    setErrorType
}) => {
    return (
        <Box component={'div'} className="card card--no-margin">
            <div className="card__header">
                <Typography className={'card__title'} variant={'h3'} component={'p'}>
                    Identité visuel
                </Typography>
                <HorizontalLabelPositionBelowStepper />
                <Box component={'div'} className="card__title-step">
                    Étape {page + 1}
                </Box>
                <Typography variant={'subtitle1'} className="card__text" gutterBottom>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Vous avez déjà un compte ?{' '}
                    <Link className="card__link" to={ROUTES.AUTHENTIFICATION.SIGN_IN.PATH}>
                        Connectez-vous
                    </Link>
                </Typography>
            </div>
            <div className="card__body">
                <SignUpFormStepFour
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
            <Link className="card__footer-title--tutorial" to={ROUTES.AUTHENTIFICATION.SIGN_UP.PATH}>
                Suivez notre tutoriel
            </Link>
        </Box>
    )
}

SignUpComponentStepFour.propTypes = {
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    HorizontalLabelPositionBelowStepper: PropTypes.func,
    error: PropTypes.object,
    setError: PropTypes.func,
    errorType: PropTypes.object,
    setErrorType: PropTypes.func,
    page: PropTypes.number
}

export default SignUpComponentStepFour
