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
        <Box component={'div'} className="card ">
            <div className="card__header">
                <Typography className={'card__title'} variant={'h3'} component={'p'}>
                    Votre mot de passe a été mis à jour avec succès
                </Typography>
                <Typography variant={'subtitle1'} className="card__text" gutterBottom>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Vous avez déjà un compte ?{' '}
                    <Link class="card__link" to={ROUTES.AUTHENTIFICATION.SIGN_IN.PATH}>
                        Connectez-vous
                    </Link>
                </Typography>
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
