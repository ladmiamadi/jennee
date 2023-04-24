import React from 'react'
import PropTypes from 'prop-types'

/**

A React functional component for rendering a button element.
@param {Object} props - The props object containing the name and className props.
@param {string} props.name - The text to be displayed inside the button.
@param {string} props.className - The CSS class(es) to be applied to the button.
@param {function} props.handleClick - The onClick function.
@returns {JSX.Element} - A button element with the specified name and class name.
*/

const Button = ({ className, name, handleClick }) => {
    return (
        <button onClick={(e) => handleClick(e)} className={className}>
            {name}
        </button>
    )
}

Button.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    handleClick: PropTypes.func
}

export default Button
