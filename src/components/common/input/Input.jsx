import React from 'react'
import PropTypes from 'prop-types'
/**
A React functional component for rendering an input element.
@param {Object} props - The props object containing the classname, required, name, placeholder, value, type, onChange, and dataOnChange props.
@param {string} props.classname - The CSS class(es) to be applied to the input element.
@param {boolean} props.required - A boolean value indicating whether the input is required or not.
@param {string} name - The name of the input element.
@param {string} placeholder - The placeholder text to be displayed inside the input element.
@param {string} id - The CSS id to be applied to the input element.
@param {string} value - The value of the input element.
@param {string} type - The type of the input element (e.g. "text", "email", "password").
@param {function} onChange - The function to be called when the input value changes.
@param {Object} dataOnChange - An object containing the state and setState functions for updating the input's value and the name of the input element.
@param {Element} children - An html element icon
@param {function} childrenOnClick - The function to be called when the icon is clicked.
@returns {JSX.Element} - An input element with the specified props.
*/

const Input = ({ id, classname, required, name, placeholder, value, type, onChange, dataOnChange, children, childrenOnClick }) => {
    return (
        <div className={'input-container'}>
            <input
                id={id}
                name={name}
                className={classname}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={(e) => onChange(dataOnChange.state, dataOnChange.setState, dataOnChange.name, e.target.value, e)}
                required={required}
            />
            {children && (
                <div aria-hidden="true" className="input-container__icon" onClick={(e) => childrenOnClick(e)}>
                    {children}
                </div>
            )}
        </div>
    )
}

Input.propTypes = {
    id: PropTypes.string,
    classname: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    dataOnChange: PropTypes.object.isRequired,
    children: PropTypes.node,
    childrenOnClick: PropTypes.func
}

export default Input
