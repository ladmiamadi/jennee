import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as JeneeLogo } from '@assets/images/svg/features/JeNee_LOGO-removebg-preview.svg'
import { Link } from 'react-router-dom'
import { ROUTES } from '@constants/routesConst'

/**

 A React functional component for rendering a logo element.
 @returns {JSX.Element} - A logo element with JeNee logo and the text "X Connexion".
 */

export const Header = ({ step }) => {
    return (
        <>
            <div className="logo">
                <Link to={ROUTES.ROOT.PATH}>
                    <JeneeLogo />
                </Link>
                <h1>X {step}</h1>
            </div>
        </>
    )
}
export default Header

Header.propTypes = {
    step: PropTypes.string
}
