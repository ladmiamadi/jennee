import React from 'react'
import PropTypes from 'prop-types'
/**
 A React functional component for rendering an input search element.
 @param {Object} props - The props object containing the classname, required, name, placeholder, value, type, onChange, and dataOnChange props.
 @param {string} placeholder - The placeholder text to be displayed inside the input element.
 @param {string} value - The value of the input element.
 @param {function} onChange - The function to be called when the input value changes.
 @param {Object} dataOnChange - An object containing the state and setState functions for updating the input's value and the name of the input element.
 @param {boolean} display - The value to display the input search component or nor
 @returns {JSX.Element} - An input element with the specified props.
 */
const InputSearch = ({ placeholder, value, onChange, dataOnChange, display }) => {
    return (
        <div className={'input-search'}>
            <input
                className={'input-search__input'}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(dataOnChange.state, dataOnChange.setState, dataOnChange.name, e.target.value)}
                style={{ display: display ? 'block' : 'none' }}
            />
        </div>
    )
}
InputSearch.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    dataOnChange: PropTypes.object.isRequired,
    display: PropTypes.bool.isRequired
}

export default InputSearch
