import React from 'react'
import PropTypes from 'prop-types'
import Logo from '@layout/authLayout/header/logo'
import '@styles/main.scss'
import NewPasswordFormMember from '@common/form/NewMember/NewPasswordFormMember'
import { Grid } from '@mui/material'
import Layout from '../../../layout/shape/Layout'
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
const CreatePasswordComponent = ({ setFormValue, formValue, HandleSubmit, handleChange, error, setError, errorType, setErrorType }) => {
    return (
        // card__header // card__footer
        <>
            <Grid className="page">
                <Grid className="page__left">
                    <Grid className="card">
                        <Grid className="card__header">
                            <Logo step="Nouveau membre" />
                        </Grid>
                        <Grid className="card__title">
                            <strong>BDE MAS’QUADRA</strong>
                        </Grid>
                        <p className="card__info">Bienvenue Roman Andrieux </p>
                        <Grid className="card__no-account">
                            <p className="card__text">Créer votre mot de passe </p>
                        </Grid>

                        <NewPasswordFormMember
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

CreatePasswordComponent.propTypes = {
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object,
    setError: PropTypes.func,
    errorType: PropTypes.object,
    setErrorType: PropTypes.func
}

export default CreatePasswordComponent
