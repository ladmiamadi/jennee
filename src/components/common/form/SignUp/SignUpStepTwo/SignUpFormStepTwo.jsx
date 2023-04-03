import React from 'react'
import PropTypes from 'prop-types'
import '../../../../../assets/styles/pages/login/index.scss'
import Input from '../../../input/Input'
import { INPUT } from '../../../../../constants/inputConst'
import Button from '../../../button/Button'
import TextArea from '../../../input/TextArea'

/**

SignUpFormStepTwo is a functional component that renders a form with input fields .
@param {Object} props - The component props.
@param {string} props.name - The name of the form.
@param {string} props.className - The class name of the form.
@param {Function} props.HandleSubmit - The function to handle form submission.
@param {Function} props.handleChange - The function to handle input field changes.
@param {Object} props.formValue - The object that contains the form input field values.
@param {Function} props.setFormValue - The function to set the form input field values.
@param {Object} props.error - The object that contains the error status for each input field.
@param {Function} props.setError - The function to set the error status for each input field.
@param {Object} props.errortype - The object that contains the error message for each input field.
@param {Function} props.setErrortype - The function to set the error message for each input field.
@returns {JSX.Element} - The JSX element that represents the SignUpFormStepTwo component.
*/

const SignUpFormStepTwo = ({
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
    console.log(error, setError)
    return (
        <>
            <form noValidate name={name} className={className} onSubmit={HandleSubmit}>
                <Input
                    required={true}
                    name={!error.city ? 'input' : 'input-error'}
                    type="text"
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.SIGN_UP.STUDENTS_ORGANISATION.CITY.NAME
                    }}
                    value={formValue.city}
                    onChange={handleChange}
                    placeholder="Ville"
                />
                {error.city ? <label className="card__error">{errortype.city}</label> : ''}
                <Input
                    required={true}
                    name={!error.name_organisation ? 'input' : 'input-error'}
                    type="text"
                    value={formValue.name_organisation}
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.SIGN_UP.STUDENTS_ORGANISATION.NAME_ORGANISATION.NAME
                    }}
                    onChange={handleChange}
                    placeholder="Nom de l'organisation"
                />
                {error.name_organisation ? (
                    <label className="card__error">{errortype.name_organisation}</label>
                ) : (
                    <label htmlFor="name-organisation" className="card__label-input-name-organisation">
                        ex: Bureau des Arts - M Art rix
                    </label>
                )}

                <Input
                    required={true}
                    name={!error.role_organisation ? 'input' : 'input-error'}
                    type="text"
                    value={formValue.role_organisation}
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.SIGN_UP.STUDENTS_ORGANISATION.ROLE_ORGANISATION.NAME
                    }}
                    onChange={handleChange}
                    placeholder="Votre rôle dans l’organisation"
                />
                {error.role_organisation ? (
                    <label className="card__error">{errortype.role_organisation}</label>
                ) : (
                    <label htmlFor="role-organisation" className="card__label-input-role-organisation">
                        ex: Président
                    </label>
                )}

                <Input
                    required={false}
                    name={!error.siret_number ? 'input' : 'input-error'}
                    type="text"
                    value={formValue.siret_number}
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.SIGN_UP.STUDENTS_ORGANISATION.SIRET_NUMBER.NAME
                    }}
                    onChange={handleChange}
                    placeholder="Ajouter un numéro de siret"
                />
                {error.siret_number ? (
                    <label className="card__error">{errortype.siret_number}</label>
                ) : (
                    <label htmlFor="siret" className="card__label-input-siret">
                        *Ce champ est optionnel pour le moment
                    </label>
                )}

                <TextArea
                    type="text"
                    required={false}
                    value={formValue.description}
                    dataOnChange={{
                        state: formValue,
                        setState: setFormValue,
                        name: INPUT.SIGN_UP.STUDENTS_ORGANISATION.DESCRIPTION.NAME
                    }}
                    onChange={handleChange}
                    placeholder="Ajouter une description"
                    name={!error.description ? 'card__form-description' : 'card__form-description-error'}
                />
                {error.description ? (
                    <label className="card__error">{errortype.description}</label>
                ) : (
                    <label htmlFor="description" className="card__label-input-description">
                        *Ce champ est optionnel pour le moment
                    </label>
                )}
                <label htmlFor="description-character" className="card__label-input-description-character">
                    Max 250 caractères
                </label>

                <Button className="card__form-submit" name="Passer à l'étape suivante"></Button>
            </form>
        </>
    )
}

SignUpFormStepTwo.propTypes = {
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

export default SignUpFormStepTwo
