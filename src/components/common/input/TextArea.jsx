import React from 'react'
import PropTypes from 'prop-types'

/**
A React functional component for rendering a textarea element.
@param {Object} props - The props object containing the classname, required, name, placeholder, value, type, onChange, and dataOnChange props.
@param {string} classname - The CSS class(es) to be applied to the input element.
@param {boolean} required - A boolean value indicating whether the input is required or not.
@param {string} name - The name of the input element.
@param {string} placeholder - The placeholder text to be displayed inside the input element.
@param {string} value - The value of the input element.
@param {function} onChange - The function to be called when the input value changes.
@param {Object} dataOnChange - An object containing the state and setState functions for updating the input's value and the name of the input element.
 @param {boolean} isDisabled - the prop to make textarea disabled or not
 @returns {JSX.Element} - A textarea element with the specified props.
*/

const TextArea = ({ classname, required, name, placeholder, value, onChange, dataOnChange, isDisabled }) => {
    const handleTextareaChange = (event) => {
        const newValue = event.target.value.slice(0, 250) // limiter le nombre de caractères à 250
        onChange(dataOnChange.state, dataOnChange.setState, dataOnChange.name, newValue)
    }

    return (
        <textarea
            name={name}
            className={classname}
            placeholder={placeholder}
            value={value}
            onChange={handleTextareaChange}
            required={required}
            disabled={isDisabled}
        />
    )
}

TextArea.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    classname: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    required: PropTypes.bool,
    dataOnChange: PropTypes.object.isRequired,
    isDisabled: PropTypes.bool
}

export default TextArea
