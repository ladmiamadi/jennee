import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ROUTES } from '@constants/routesConst'
import SignUpFormStepFour from '@common/form/SignUp/SignUpStepFour/SignUpFormStepFour'
import { Grid } from '@mui/material'
import Layout from '@layout/shape/Layout'
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
        <>
            <Grid className="page">
                <Grid className="page__left">
                    <Grid name="card" className="card">
                        <Grid className="card__title">
                            <strong>Informations personnelles</strong>
                            <HorizontalLabelPositionBelowStepper />
                            <Grid className="card__title-step">Étape {page + 1}</Grid>
                        </Grid>
                        <Grid className="card__no-account">
                            <p className="card__text">Vous avez déjà un compte ?</p>
                            <Link className="card__link-registration" to={ROUTES.AUTHENTIFICATION.SIGN_IN.PATH}>
                                {' '}
                                Connectez-vous{' '}
                            </Link>
                        </Grid>

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
                    </Grid>
                </Grid>
                <Grid className="page__right">
                    <Layout />
                </Grid>
            </Grid>
        </>
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
