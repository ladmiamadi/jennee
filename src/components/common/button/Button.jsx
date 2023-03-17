import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, className, handleClick }) => {
    return (
        <button onClick={() => handleClick()} className={className}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    handleClick: PropTypes.func
}

export default Button
