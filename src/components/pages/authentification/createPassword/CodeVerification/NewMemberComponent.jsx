import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logo from '@layout/authLayout/header/logo'
import NewMemberForm from '@common/form/NewMember/NewMemberForm'
import { Grid } from '@mui/material'
import Layout from '@layout/shape/Layout'

/**
 Represents the NewMemberComponent functional component.
 @param {object} props - The props object containing the following properties:
 @param {function} setFormValue - A function to set the formValue state.
 @param {object} formValue - An object containing the current form values.
 @param {function} HandleSubmit - A function to handle the form submission.
 @param {function} handleChange - A function to handle the form field changes.
 @param {object} error - An object containing any errors in the form.
 @returns {JSX.Element} - A React JSX element that renders the NewMemberComponent.
 */

const NewMemberComponent = ({ setFormValue, formValue, HandleSubmit, handleChange, error }) => {
    return (
        <>
            <Grid className="page">
                <Grid className="page__left">
                    <Grid className="card">
                        <Grid className="card__header">
                            <Logo step="Nouveau Membre" />
                        </Grid>
                        <Grid className="card__title">
                            <strong>BDE MAS’QUADRA</strong>
                        </Grid>
                        <p className="card__info">Vous à invité à rejoindre leur équipe</p>
                        <Grid className="card__no-account">
                            <p className="card__text">Veuillez renseigner le code recu sur votre adresse e-mail</p>
                        </Grid>

                        <NewMemberForm
                            formValue={formValue}
                            setFormValue={setFormValue}
                            handleChange={handleChange}
                            className={'card__form'}
                            name={'form'}
                            HandleSubmit={HandleSubmit}
                            error={error}
                        />
                        <Link className="card__forgot-password" to={''}>
                            Renvoyer le code
                        </Link>
                    </Grid>
                </Grid>

                <Grid className="page__right">
                    <Layout />
                </Grid>
            </Grid>
        </>
    )
}

NewMemberComponent.propTypes = {
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object
}

export default NewMemberComponent
