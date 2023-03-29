import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logo from '../../../layout/authLayout/header/logo'
import '../../../../assets/styles/main.scss'
import { ROUTES } from '../../../../constants/routesConst'
import { Grid } from '@mui/material'
import Footer from '../../../layout/authLayout/footer/Footer'
import Layout from '../../../layout/shape/Layout'
/**
 * A component that displays a success message after a user account has been created
 *
 * @component
 */
const Success = () => {
    return (
        <>
            <Grid className="page">
                <Grid className="page__left">
                    <Grid className="card__succes">
                        <Grid className="card__header">
                            <Logo step="Connexion" />
                        </Grid>
                        <Grid className="card__title">
                            <strong>Votre mot de passe a été mis à jour avec succès</strong>
                        </Grid>
                        <Grid className="card__no-account"></Grid>

                        <Link className="card__forgot-password" to={ROUTES.AUTHENTIFICATION.SIGN_IN.PATH}>
                            Connectez-vous
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

Success.propTypes = {
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func
}

export default Success
