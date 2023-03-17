import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ name, options, className, handleChange, errors }) => {
    return (
        <select
            name={name}
            className={className}
            style={{ border: !errors ? '' : '1px solid red' }}
            onChange={(event) => handleChange(event)}>
            {options.map((option, i) => {
                return (
                    <option key={i} value={option}>
                        {option}
                    </option>
                )
            })}
        </select>
    )
}

Select.propTypes = {
    options: PropTypes.array,
    className: PropTypes.string,
    handleChange: PropTypes.func,
    name: PropTypes.string,
    errors: PropTypes.string
}

export default Select
