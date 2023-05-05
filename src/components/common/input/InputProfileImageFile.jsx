import React, { useState } from 'react'
import Camera from '@assets/images/organization/profile/camera.png'
import PropTypes from 'prop-types'

/**
 *
 * @param {Object} props - The props object.
 * @param {string} props.classname - The class name for the input element.
 * @param {string} props.alt - The alt image attributes
 * @param {string} props.placeholder - The placeholder text for the input element.
 * @param {string} props.value - The value of the input element.
 * @param {function} props.onChange - The function to call when the input value changes.
 * @param {Object} props.dataOnChange - An object containing state and setState functions, and the name of the input element.
 * @returns {JSX.Element}- The InputProfileImageFile component
 * @constructor
 */
const InputProfileImageFile = ({ classname, alt, placeholder, value, onChange, dataOnChange }) => {
    const [fileName, setFileName] = useState('')

    const handleFileSelect = (e) => {
        const file = e.target.files[0]
        if (file) {
            setFileName(file.name)
            onChange(dataOnChange.state, dataOnChange.setState, dataOnChange.name, file)
        }
    }

    return (
        <>
            <label>
                {fileName ? <span>{fileName}</span> : placeholder}
                <img src={Camera} className={classname} alt={alt} />
                <input hidden accept="image/*" type="file" value={value} onChange={handleFileSelect} />
            </label>
        </>
    )
}

InputProfileImageFile.prototype = {
    className: PropTypes.string,
    alt: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    dataOnChange: PropTypes.object
}
export default InputProfileImageFile
