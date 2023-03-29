import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logo from '../../../layout/authLayout/header/logo'
import '../../../../assets/styles/main.scss'
import { ROUTES } from '../../../../constants/routesConst'
import SignUpFormStepTwo from '../../../common/form/SignUpFormStepTwo'
import { Grid } from '@mui/material'
import Footer from '../../../layout/authLayout/footer/Footer'
import Layout from '../../../layout/shape/Layout'
/**
A component for the second step of the Sign Up process.
@param {Object} props - The component props.
@param {Function} props.HandleSubmit - The function to handle form submission.
@param {Function} props.handleChange - The function to handle input change.
@param {Object} props.formValue - The form values.
@param {Function} props.setFormValue - The function to set form values.
@param {Function} props.HorizontalLabelPositionBelowStepper - The stepper component to display the progress.
@param {Object} props.error - The errors in the form.
@param {Function} props.setError - The function to set form errors.
@param {Object} props.errortype - The error types in the form.
@param {Function} props.setErrortype - The function to set error types in the form.
@returns {JSX.Element} - The Sign Up Step Two component.
*/
const SignUpComponentStepTwo = ({
    setFormValue,
    formValue,
    HandleSubmit,
    handleChange,
    page,
    HorizontalLabelPositionBelowStepper,
    error,
    setError,
    errortype,
    setErrortype
}) => {
    return (
        <>
            <Grid className="page">
                <Grid className="page__left">
                    <Grid className="card">
                        <Grid className="card__header">
                            <Logo step="Inscription" />
                        </Grid>
                        <Grid className="card__title">
                            <strong>Organisation Etudiante</strong>
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
                        <SignUpFormStepTwo
                            formValue={formValue}
                            setFormValue={setFormValue}
                            handleChange={handleChange}
                            className={'card__form'}
                            name={'form'}
                            HandleSubmit={HandleSubmit}
                            error={error}
                            setError={setError}
                            errortype={errortype}
                            setErrortype={setErrortype}
                        />
                        <Link className="card__forgot-password" to={ROUTES.AUTHENTIFICATION.SIGN_UP.PATH}>
                            Suivez notre tutoriel
                        </Link>
                    </Grid>
                    <Footer />
                </Grid>

                <Grid className="page__right">
                    <Layout />
                </Grid>
            </Grid>
        </>
    )
}

SignUpComponentStepTwo.propTypes = {
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    HorizontalLabelPositionBelowStepper: PropTypes.func,
    error: PropTypes.object,
    setError: PropTypes.func,
    errortype: PropTypes.object,
    setErrortype: PropTypes.func,
    page: PropTypes.number
}

export default SignUpComponentStepTwo
