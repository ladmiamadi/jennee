import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ formData, name, placeholder, className, handleChange, errors, type, id }) => {
    return (
        <input
            id={id}
            type={type}
            name={name}
            className={className}
            placeholder={placeholder}
            onChange={(event) => handleChange(event)}
            style={{ border: !errors ? '' : '1px solid red', display: id ? 'none' : 'block' }}
        />
    )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string,
    handleChange: PropTypes.func,
    name: PropTypes.string,
    errors: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.id,
    formData: PropTypes.string
}

export default Input
