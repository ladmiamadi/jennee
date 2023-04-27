import * as React from 'react'
import PropTypes from 'prop-types'
import ModalSecondStep from './ModalSecondStep'
import { Modal } from '@mui/material'
import ModalFirstStep from '@common/modal/ModalFirstStep'
import ModalThirdStep from '@common/modal/ModalThirdStep'
import ModalFourthStep from '@common/modal/ModalFourthStep'
import ModalFifthStep from '@common/modal/ModalFifthStep'
import ModalExit from '@common/modal/modalExit'

/**
 The component for the modal
 @typedef {Object} Props
 @property {Function} setFormValue - Function to set the state to form value.
 @property {Object} formValue - The current form value.
 @property {Function} HandleSubmit - Function to handle form submission.
 @property {Function} handleChange - Function to handle form input change.
 @param {Props} props - The props object containing the component's input data.
 @returns {JSX.Element} The Sign in component.
 */

const ModalEvent = ({
    open,
    handleClose,
    formValue,
    setFormValue,
    handleChange,
    handleSubmit,
    errors,
    setErrors,
    step,
    handleNext,
    handlePrev,
    handlePreClose,
    handleComeLastStep,
    contentModalFirst,
    contentModalSecond,
    contentModalThird,
    contentModalFourth,
    contentModalFifth,
    data
}) => {
    const stepModal = () => {
        switch (step) {
            case 0:
                return (
                    <ModalExit
                        formValue={formValue}
                        setFormValue={setFormValue}
                        handleChange={handleChange}
                        handlePreClose={handlePreClose}
                        handleClose={handleClose}
                        errors={errors}
                        setErrors={setErrors}
                        handleNext={handleNext}
                        step={step}
                        handleComeLastStep={handleComeLastStep}
                    />
                )
            case 1:
                return (
                    <ModalFirstStep
                        data={data.modalFirst}
                        contentModalFirst={contentModalFirst}
                        formValue={formValue}
                        setFormValue={setFormValue}
                        handleChange={handleChange}
                        errors={errors}
                        setErrors={setErrors}
                        handleNext={handleNext}
                        handlePreClose={handlePreClose}
                        step={step}
                    />
                )
            case 2:
                return (
                    <ModalSecondStep
                        handlePreClose={handlePreClose}
                        formValue={formValue}
                        contentModalSecond={contentModalSecond}
                        setFormValue={setFormValue}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        setErrors={setErrors}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                        step={step}
                        data={data.modalSecond}
                    />
                )
            case 3:
                return (
                    <ModalThirdStep
                        handlePreClose={handlePreClose}
                        formValue={formValue}
                        contentModalThird={contentModalThird}
                        setFormValue={setFormValue}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        setErrors={setErrors}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                        step={step}
                        data={data.modalThird}
                    />
                )
            case 4:
                return (
                    <ModalFourthStep
                        handlePreClose={handlePreClose}
                        formValue={formValue}
                        contentModalFourth={contentModalFourth}
                        setFormValue={setFormValue}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        setErrors={setErrors}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                        step={step}
                        data={data.modalFourth}
                    />
                )
            case 5:
                return (
                    <ModalFifthStep
                        data={data.modalFifth}
                        formValue={formValue}
                        handlePreClose={handlePreClose}
                        contentModalFifth={contentModalFifth}
                        setFormValue={setFormValue}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        setErrors={setErrors}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                        step={step}
                    />
                )
            default:
                return (
                    <ModalFirstStep
                        formValue={formValue}
                        contentModalFirst={contentModalFirst}
                        handlePreClose={handlePreClose}
                        setFormValue={setFormValue}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        setErrors={setErrors}
                        handleNext={handleNext}
                        data={data.modalFirst}
                    />
                )
        }
    }
    return (
        <Modal
            closeAfterTransition
            open={open}
            onClose={handlePreClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            {stepModal()}
            {/*    <Modal className="modal" aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" open={false}>
                        <ModalExit />
                   */}
        </Modal>
    )
}

ModalEvent.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    errors: PropTypes.object,
    setErrors: PropTypes.func,
    step: PropTypes.number,
    handleNext: PropTypes.func,
    handlePreClose: PropTypes.func,
    handlePrev: PropTypes.func,
    handleComeLastStep: PropTypes.func,
    contentModalFirst: PropTypes.node,
    contentModalSecond: PropTypes.node,
    contentModalThird: PropTypes.node,
    contentModalFourth: PropTypes.node,
    contentModalFifth: PropTypes.node,
    data: PropTypes.object
}

export default ModalEvent
