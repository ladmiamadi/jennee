import * as React from 'react'
import PropTypes from 'prop-types'
import ModalSecondStep from './ModalSecondStep'
import { Modal } from '@mui/material'
import ModalFirstStep from '@common/modal/ModalFirstStep'

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
    handlePrev
}) => {
    const stepModal = () => {
        switch (step) {
            case 1:
                return (
                    <ModalFirstStep
                        formValue={formValue}
                        setFormValue={setFormValue}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleClose={handleClose}
                        errors={errors}
                        setErrors={setErrors}
                        handleNext={handleNext}
                        step={step}
                    />
                )
            case 2:
                return (
                    <ModalSecondStep
                        formValue={formValue}
                        setFormValue={setFormValue}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleClose={handleClose}
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
                        setFormValue={setFormValue}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleClose={handleClose}
                        errors={errors}
                        setErrors={setErrors}
                        handleNext={handleNext}
                        step={step}
                    />
                )
        }
    }
    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
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
    handlePrev: PropTypes.func
}

export default ModalEvent
