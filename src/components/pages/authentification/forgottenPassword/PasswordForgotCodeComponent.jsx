import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logo from '@components/layout/authLayout/header/logo'
import '@styles/main.scss'
import { ROUTES } from '@constants/routesConst'
import PasswordForgotCodeForm from '@components/common/form/PasswordForgotCodeForm'
import { Grid } from '@mui/material'
import Footer from '@components/layout/authLayout/footer/Footer'
import Layout from '@components/layout/shape/Layout'
/**
Represents the PasswordForgotCodeComponent functional component.
@param {object} props - The props object containing the following properties:
@param {function} setFormValue - A function to set the formValue state.
@param {object} formValue - An object containing the current form values.
@param {function} HandleSubmit - A function to handle the form submission.
@param {function} handleChange - A function to handle the form field changes.
@param {object} error - An object containing any errors in the form.
@param {function} setError - A function to set the error state.
@param {object} errortype - An object containing any errors in the form field types.
@param {function} setErrortype - A function to set the errortype state.
@returns {JSX.Element} - A React JSX element that renders the PasswordForgotCodeComponent.
*/
const PasswordForgotCodeComponent = ({ setFormValue, formValue, HandleSubmit, handleChange, error, setError, errortype, setErrortype }) => {
    return (
        // card__header // card__footer
        <>
            <Grid className="page">
                <Grid className="page__left">
                    <Grid className="card">
                        <Grid className="card__header">
                            <Logo step="Connexion" />
                        </Grid>
                        <Grid className="card__title">
                            <strong>Mot de passe oublié</strong>
                        </Grid>
                        <Grid className="card__no-account">
                            <p className="card__text">Veuillez renseigner le code recu sur votre adresse e-mail</p>
                        </Grid>

                        <PasswordForgotCodeForm
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
                            Renvoyer le code
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

PasswordForgotCodeComponent.propTypes = {
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object,
    setError: PropTypes.func,
    errortype: PropTypes.object,
    setErrortype: PropTypes.func
}

export default PasswordForgotCodeComponent
