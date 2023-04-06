import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ROUTES } from '@constants/routesConst'
import { Box, Typography } from '@mui/material'
/**
 * A component that displays a success message after a user account has been created
 *
 * @component
 */
const Success = () => {
    return (
        <Box component={'div'} className="card">
            <div className="card__header">
                <Typography className={'card__title'} variant={'h3'} component={'p'}>
                    Votre mot de passe a été mis à jour avec succès
                </Typography>
            </div>
            <div className="card__body">
                <Link className="card__forgot-password" to={ROUTES.AUTHENTIFICATION.SIGN_IN.PATH}>
                    Connectez-vous
                </Link>
            </div>
        </Box>
    )
}

Success.propTypes = {
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func
}

export default Success
