import * as React from 'react'
import PropTypes from 'prop-types'
import ModalSecondStep from './ModalSecondStep'
import { Modal } from '@mui/material'
import ModalFirstStep from '@common/modal/ModalFirstStep'
import ModalThirdStep from '@common/modal/ModalThirdStep'
import ModalFourthStep from '@common/modal/ModalFourthStep'
import ModalFifthStep from '@common/modal/ModalFifthStep'
import ModalExit from '@common/modal/modalExit'

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
    handleComeLastStep
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
            case 3:
                return (
                    <ModalThirdStep
                        handlePreClose={handlePreClose}
                        formValue={formValue}
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
            case 4:
                return (
                    <ModalFourthStep
                        handlePreClose={handlePreClose}
                        formValue={formValue}
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
            case 5:
                return (
                    <ModalFifthStep
                        formValue={formValue}
                        handlePreClose={handlePreClose}
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
                        handlePreClose={handlePreClose}
                        setFormValue={setFormValue}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        setErrors={setErrors}
                        handleNext={handleNext}
                        step={step}
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
    handleComeLastStep: PropTypes.func
}

export default ModalEvent
