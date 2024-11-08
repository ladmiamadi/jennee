import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ROUTES } from '@constants/routesConst'
import { Grid } from '@mui/material'
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
                        <Grid className="card__title">
                            <strong>Votre compte a été crée . Bienvenue sur JeNee</strong>
                        </Grid>
                        <Grid className="card__no-account"></Grid>

                        <Link className="card__forgot-password" to={ROUTES.AUTHENTIFICATION.SIGN_IN.PATH}>
                            Connectez-vous
                        </Link>
                    </Grid>
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
