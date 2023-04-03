import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logo from '../../../../layout/authLayout/header/logo'
import '../../../../../assets/styles/main.scss'
import EmailValidationForm from '../../../../common/form/SignUp/EmailValidation/EmailValidationForm'
import { Grid } from '@mui/material'
import Footer from '../../../../layout/authLayout/footer/Footer'
import Layout from '../../../../layout/shape/Layout'
/**
Represents the EmailValidationComponent functional component.
@param {object} props - The props object containing the following properties:
@param {function} setFormValue - A function to set the formValue state.
@param {object} formValue - An object containing the current form values.
@param {function} HandleSubmit - A function to handle the form submission.
@param {function} handleChange - A function to handle the form field changes.
@param {object} error - An object containing any errors in the form.
@param {function} setError - A function to set the error state.
@param {object} errortype - An object containing any errors in the form field types.
@param {function} setErrorType - A function to set the errortype state.
@returns {JSX.Element} - A React JSX element that renders the EmailValidationComponent.
*/
const EmailValidationComponent = ({ setFormValue, formValue, HandleSubmit, handleChange, error, setError, errortype, setErrorType }) => {
    return (
        <>
            <Grid className="page">
                <Grid className="page__left">
                    <Grid className="card">
                        <Grid className="card__header">
                            <Logo step="Inscription" />
                        </Grid>
                        <Grid className="card__title">
                            <strong>Un code vous a été envoyé sur votre adresse mail</strong>
                        </Grid>
                        <Grid className="card__no-account">
                            <p className="card__text">Veuillez renseigner le code recu sur votre adresse e-mail</p>
                        </Grid>
                        <EmailValidationForm
                            formValue={formValue}
                            setFormValue={setFormValue}
                            handleChange={handleChange}
                            className={'card__form'}
                            name={'form'}
                            HandleSubmit={HandleSubmit}
                            error={error}
                            setError={setError}
                            errortype={errortype}
                            setErrorType={setErrorType}
                        />
                        <Link className="card__reset-code" to={'/reset-code'}>
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

EmailValidationComponent.propTypes = {
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object,
    setError: PropTypes.func,
    errortype: PropTypes.object,
    setErrorType: PropTypes.func
}

export default EmailValidationComponent
