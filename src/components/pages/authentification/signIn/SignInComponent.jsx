import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logo from '../../../layout/authLayout/header/logo'
import '../../../../assets/styles/main.scss'
import { ROUTES } from '../../../../constants/routesConst'
import SignInForm from '../../../common/form/SignInForm'
import { Grid } from '@mui/material'
import Footer from '../../../layout/authLayout/footer/Footer'
import Layout from '../../../layout/shape/Layout'
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
const SignInComponent = ({ setFormValue, formValue, HandleSubmit, handleChange, error, setError, errortype, setErrortype }) => {
    return (
        <>
            <Grid className="page">
                <Grid className="page__left">
                    <Grid className="card">
                        <Grid className="card__header">
                            <Logo step="Connexion" />
                        </Grid>
                        <Grid className="card__title">
                            <strong>Se connecter</strong>
                        </Grid>
                        <Grid className="card__no-account">
                            <p className="card__text">Vous n avez pas de compte ?</p>
                            <Link className="card__link-registration" to={ROUTES.AUTHENTIFICATION.SIGN_UP.PATH}>
                                {' '}
                                Inscrivez-vous{' '}
                            </Link>
                        </Grid>

                        <SignInForm
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
                        <Link className="card__forgot-password" to={ROUTES.AUTHENTIFICATION.FORGOTTEN_PASSWORD.PATH}>
                            Mot de passe oublié ?
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

SignInComponent.propTypes = {
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object,
    setError: PropTypes.func,
    errortype: PropTypes.object,
    setErrortype: PropTypes.func
}

export default SignInComponent
