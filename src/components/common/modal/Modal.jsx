import * as React from 'react'
import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types'
/*import ModalFirstStep from './modalFirstStep'*/
import ModalSecondStep from './ModalSecondStep'
import { Box } from '@mui/material'
import ModalExit from './modalExit'

const ModalEvent = ({ open, handleClose, formData, handleChange, handleSubmit, errors, step, handleNext, handlePrev }) => {
    return (
        <Box>
            {step === 1 && (
                <Modal
                    className="modal"
                    open={open}
                    onClose={handleClose}
                    handleNext={handleNext}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    {/* <ModalFirstStep
                        formData={formData}
                        setFormData={setFormData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleClose={handleClose}
                        errors={errors}
                        setErrors={setErrors}
                        handleNext={handleNext}
                        step={step}
                    />*/}
                </Modal>
            )}
            {step === 2 && (
                <Modal
                    className="modal"
                    open={open}
                    onClose={handleClose}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <ModalSecondStep
                        errors={errors}
                        handleClose={handleClose}
                        handlePrev={handlePrev}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        formData={formData}
                        step={step}
                    />
                </Modal>
            )}
            <Modal className="modal" aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" open={false}>
                <ModalExit />
            </Modal>
        </Box>
    )
}

ModalEvent.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    formData: PropTypes.object,
    setFormData: PropTypes.func,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    errors: PropTypes.object,
    setErrors: PropTypes.func,
    step: PropTypes.numb,
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func
}

export default ModalEvent
