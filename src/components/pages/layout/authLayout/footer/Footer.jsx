import React from 'react'
import PropTypes from 'prop-types'
import '../../../../assets/styles/main.scss'
import { Grid } from '@mui/material'

/**

A React functional component for rendering a footer element.
@param {string} className - The CSS class(es) to be applied to the footer.
@returns {JSX.Element} - A footer element with the specified class name.
*/

const Footer = () => {
    return (
        <>
            <Grid className={'page__left-footer'}>
                <p>@Jenee</p>
                <p>Contact</p>
                <p>Confidentialité</p>
                <p>CGU</p>
                <p>CGV</p>
            </Grid>
        </>
    )
}

Footer.propTypes = {
    className: PropTypes.string
}

export default Footer
