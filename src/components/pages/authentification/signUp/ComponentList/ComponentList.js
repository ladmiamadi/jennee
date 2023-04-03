import React from 'react'
import SignUpComponentStepOne from '../SignUpStepOne/SignUpComponentStepOne'
import { HandleChange } from '../../../../../utils/HandleChange'

import SignUpComponentStepTwo from '../SignUpStepTwo/SignUpComponentStepTwo'
import SignUpComponentStepThree from '../SignUpStepThree/SignUpComponentStepThree'
import SignUpComponentStepFour from '../SignUpStepFour/SignUpComponentStepFour'
import PropTypes from 'prop-types'
import Succes from './Succes'
import EmailValidationComponent from '../EmailValidation/EmailValidationComponent.jsx'

/**

ComponentList is a functional component that renders a list of child components used for a multi-step sign-up form.
@param {Object} props - The component props
@param {function} props.setFormValue - A function that sets the value of the form fields
@param {Object} props.formValue - An object that contains the current value of the form fields
@param {function} props.HandleSubmit - A function that handles the form submission
@param {function} props.handleChange - A function that handles the form input changes
@param {number} props.page - The current page number of the multi-step form
@param {function} props.setPage - A function that sets the current page number of the multi-step form
@param {function} props.HorizontalLabelPositionBelowStepper - A function that sets the horizontal label position below stepper
@param {Object} props.error - An object that contains the current error state of the form fields
@param {function} props.setError - A function that sets the error state of the form fields
@param {Object} props.errortype - An object that contains the current error type of the form fields
@param {function} props.setErrorType - A function that sets the error type of the form fields
@returns {Array} An array of child components to render
*/
const ComponentList = ({
    setFormValue,
    formValue,
    HandleSubmit,
    page,
    setPage,
    HorizontalLabelPositionBelowStepper,
    error,
    setError,
    errortype,
    setErrorType
}) => [
    <SignUpComponentStepOne
        key={'1'}
        HorizontalLabelPositionBelowStepper={HorizontalLabelPositionBelowStepper}
        page={page}
        setPage={setPage}
        handleChange={HandleChange}
        formValue={formValue}
        setFormValue={setFormValue}
        HandleSubmit={HandleSubmit}
        error={error}
        setError={setError}
        errortype={errortype}
        setErrorType={setErrorType}
    />,
    <SignUpComponentStepTwo
        key={'2'}
        HorizontalLabelPositionBelowStepper={HorizontalLabelPositionBelowStepper}
        page={page}
        setPage={setPage}
        handleChange={HandleChange}
        formValue={formValue}
        setFormValue={setFormValue}
        HandleSubmit={HandleSubmit}
        error={error}
        setError={setError}
        errortype={errortype}
        setErrorType={setErrorType}
    />,
    <SignUpComponentStepThree
        key={'3'}
        HorizontalLabelPositionBelowStepper={HorizontalLabelPositionBelowStepper}
        page={page}
        setPage={setPage}
        handleChange={HandleChange}
        formValue={formValue}
        setFormValue={setFormValue}
        HandleSubmit={HandleSubmit}
        error={error}
        setError={setError}
        errortype={errortype}
        setErrorType={setErrorType}
    />,
    <SignUpComponentStepFour
        key={'4'}
        HorizontalLabelPositionBelowStepper={HorizontalLabelPositionBelowStepper}
        page={page}
        setPage={setPage}
        handleChange={HandleChange}
        formValue={formValue}
        setFormValue={setFormValue}
        HandleSubmit={HandleSubmit}
        error={error}
        setError={setError}
        errortype={errortype}
        setErrorType={setErrorType}
    />,
    <EmailValidationComponent
        key={'5'}
        page={page}
        setPage={setPage}
        handleChange={HandleChange}
        formValue={formValue}
        setFormValue={setFormValue}
        HandleSubmit={HandleSubmit}
        error={error}
        setError={setError}
        errortype={errortype}
        setErrorType={setErrorType}
    />,
    <Succes key={'6'} />
]

ComponentList.propTypes = {
    HandleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    HandleChangeFile: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    HorizontalLabelPositionBelowStepper: PropTypes.func,
    error: PropTypes.object,
    setError: PropTypes.func,
    errortype: PropTypes.object,
    setErrortype: PropTypes.func
}

export default ComponentList
