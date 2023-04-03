import React from 'react'
import PropTypes from 'prop-types'
import '../../../../../assets/styles/pages/login/index.scss'
import Input from '../../../input/Input'
import { INPUT } from '../../../../../constants/inputConst'
import Button from '../../../button/Button'

/**

SignUpFormStepThree component represents the third step of a sign-up form
@param {Object} props - Component props
@param {string} props.name - The name of the form.
@param {string} props.className - The CSS class for the form.
@param {Function} props.HandleSubmit - The function to handle form submission.
@param {Function} props.handleChange - The function to handle form input change.
@param {Object} props.formValue - The object containing the form values.
@param {Function} props.setFormValue - The function to set the form values.
@param {Object} props.error - The object containing the form errors.
@param {Function} props.setError - The function to set the form errors.
@param {Object} props.errortype - The object containing the form error types.
@param {Function} props.setErrortype - The function to set the form error types.
@returns {JSX.Element} - The SignUpFormStepThree component.
*/

const SignUpFormStepThree = ({
    formValue,
    setFormValue,
    handleChange,
    HandleSubmit,
    className,
    name,
    error,
    setError,
    errortype,
    setErrortype
}) => {
    return (
        <>
            <form noValidate name={name} className={className} onSubmit={HandleSubmit}>
                <Input
                    className="card__form-name-account"
                    required={true}
                    name={!error.name_account_holder ? 'input' : 'input-error'}
                    type="text"
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.SIGN_UP.BANK_INFO.NAME_ACCOUNT_HOLDER.NAME
                    }}
                    value={formValue.name_account_holder}
                    onChange={handleChange}
                    placeholder="Nom du titulaire du compte"
                />
                {error.name_account_holder ? <label className="card__error">{errortype.name_account_holder}</label> : ''}
                <Input
                    className="card__form-bank"
                    required={true}
                    name={!error.bic ? 'input' : 'input-error'}
                    type="text"
                    value={formValue.bic}
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.SIGN_UP.BANK_INFO.BIC.NAME
                    }}
                    onChange={handleChange}
                    placeholder="Code BIC"
                />
                {error.bic ? <label className="card__error">{errortype.bic}</label> : ''}
                <Input
                    className="card__form-rib"
                    required={true}
                    name={!error.rib ? 'input' : 'input-error'}
                    type="text"
                    value={formValue.rib}
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.SIGN_UP.BANK_INFO.RIB.NAME
                    }}
                    onChange={handleChange}
                    placeholder="RIB du compte"
                />{' '}
                {error.rib ? (
                    <label
                        className="card__error
          ">
                        {errortype.rib}
                    </label>
                ) : (
                    ''
                )}
                <Button className="card__form-submit" name="Ajouter vos informations bancaires plus tard"></Button>
                <Button className="card__form-submit" name="Passer à l'étape suivante"></Button>
            </form>
        </>
    )
}

SignUpFormStepThree.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    error: PropTypes.object,
    setError: PropTypes.func,
    errortype: PropTypes.object,
    setErrortype: PropTypes.func
}

export default SignUpFormStepThree
