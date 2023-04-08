import React from 'react'
import PropTypes from 'prop-types'
import InputImageFile from '@common/input/inputImageFile'
import { INPUT } from '@constants/inputConst'
import Button from '@common/button/Button'

/**

A component that renders the fourth step of the sign-up form which allows the user to upload their logo and banner.
@component
@param {Object} props - The props that are passed to this component.
@param {string} [props.className] - The CSS class to be applied to the form.
@param {function} props.HandleSubmit - The function that handles form submission.
@param {function} props.handleChange - The function that handles input field changes.
@param {Object} props.formValue - An object that contains the form values.
@param {function} props.setFormValue - The function that sets the form value.
@param {Object} props.error - An object that contains the form errors.
@return {JSX.Element}
*/

const SignUpFormStepFour = ({ formValue, setFormValue, handleChange, HandleSubmit, className, error, errorType }) => {
    return (
        <>
            <form className={className} onSubmit={HandleSubmit} noValidate>
                <InputImageFile
                    required={false}
                    classname={!error.logo ? 'input-image' : 'input-image__error'}
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.SIGN_UP.LOGO.LOGO.NAME
                    }}
                    value={formValue.logo.object}
                    onChange={handleChange}
                    placeholder="Upload votre logo"
                />
                {error.logo ? <label className="card__error--logo">{errorType.logo}</label> : ''}

                <InputImageFile
                    required={false}
                    classname={!error.banner ? 'input-image' : 'input-image__error'}
                    value={formValue.banner.object}
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.SIGN_UP.LOGO.BANNER.NAME
                    }}
                    onChange={handleChange}
                    placeholder="Upload votre bannière"
                />

                {error.banner ? <label className="card__error--logo">{errorType.banner}</label> : ''}

                <Button className="card__form-submit" name="Ajouter votre logo / bannière plus tard" />
                <Button className="card__form-submit" name="Passer à l'étape suivante" />
            </form>
        </>
    )
}

SignUpFormStepFour.propTypes = {
    className: PropTypes.string,
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object,
    errorType: PropTypes.object
}

export default SignUpFormStepFour
