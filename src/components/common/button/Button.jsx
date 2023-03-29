import React from 'react'
import PropTypes from 'prop-types'
import '../../../assets/styles/pages/login/index.scss'

/**

A React functional component for rendering a button element.
@param {Object} props - The props object containing the name and className props.
@param {string} props.name - The text to be displayed inside the button.
@param {string} props.className - The CSS class(es) to be applied to the button.
@returns {JSX.Element} - A button element with the specified name and class name.
*/

const Button = (props) => {
    return <button className={props.className}>{props.name}</button>
}

Button.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string
}

export default Button
