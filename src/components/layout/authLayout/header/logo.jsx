import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as JeneeLogo } from '../../../../assets/images/svg/features/JeNee_LOGO-removebg-preview.svg'

/**

A React functional component for rendering a logo element.
@returns {JSX.Element} - A logo element with JeNee logo and the text "X Connexion".
*/

export const Logo = ({ step }) => {
    return (
        <>
            <div className="logo">
                <JeneeLogo /> <h1>X {step}</h1>
            </div>
        </>
    )
}
export default Logo

Logo.propTypes = {
    step: PropTypes.string
}
