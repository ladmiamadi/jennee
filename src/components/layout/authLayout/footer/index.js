import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ROUTES } from '@constants/routesConst'

/**

 A React functional component for rendering a footer element.
 @returns {JSX.Element} - A footer element with the specified class name.
 */

const Footer = () => {
    return (
        <footer className={'footer'}>
            <p>@Jenee</p>
            <a href={'https://jenee.fr/contact'}>
                <p>Contact</p>
            </a>
            <Link to={ROUTES.PRIVACY_POLICY.PATH}>
                <p>Confidentialité</p>
            </Link>
            <Link to={ROUTES.CGU.PATH}>
                <p>CGU</p>
            </Link>
            <Link to={ROUTES.CGV.PATH}>
                <p>CGV</p>
            </Link>
        </footer>
    )
}

Footer.propTypes = {
    className: PropTypes.string
}

export default Footer
