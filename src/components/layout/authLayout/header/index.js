import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as JeneeLogo } from '@assets/images/svg/features/JeNee_LOGO-removebg-preview.svg'
import { Link } from 'react-router-dom'
import { ROUTES } from '@constants/routesConst'
import { Typography } from '@mui/material'

/**

 A React functional component for rendering a logo element.
 @returns {JSX.Element} - A logo element with JeNee logo and the text "X Connexion".
 */

export const Header = ({ activeLink }) => {
    return (
        <div className="header">
            <Link to={ROUTES.ROOT.PATH}>
                <JeneeLogo />
            </Link>
            <Typography variant={'h2'}>X {activeLink}</Typography>
        </div>
    )
}
export default Header

Header.propTypes = {
    activeLink: PropTypes.string
}
