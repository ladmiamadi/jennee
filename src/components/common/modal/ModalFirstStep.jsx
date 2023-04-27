import * as React from 'react'
import { Box, Typography } from '@mui/material'

import PropTypes from 'prop-types'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@common/button/Button'
import CloseIcon from '@mui/icons-material/Close'

/**
 The component for the first step of each modal
 @typedef {Object} Props
 @property {Object} data - Function to set the state to form value.
 @property {Function} handleNext - The current form value.
 @property {Function} handlePreClose - Function to handle form submission.
 @property {number} step - Function to handle form input change.
 @property {JSX.Element} contentModalFirst - Function to handle form input change.
 @returns {JSX.Element} The Sign in component.
 */
const ModalFirstStep = ({ data, handlePreClose, step, contentModalFirst, footerModal }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        padding: 4,
        borderRadius: 3
    }

    return (
        <Box className="modal" sx={style}>
            <div className="modal__container">
                {/*             HEADER             */}
                <Typography variant={'h3'}>{data.title}</Typography>
                <div className={'modal__stepper'}>
                    <MobileStepper
                        variant="progress"
                        steps={6}
                        position="static"
                        activeStep={step}
                        backButton={<></>}
                        nextButton={<></>}
                        className="MuiMobileStepper-progress">
                        <div className="modal__stepper-blank"></div>
                    </MobileStepper>
                </div>
                {/*             CONTENT             */}
                {contentModalFirst}
            </div>
            {/*             FOOTER             */}
            {footerModal}
            <CloseIcon onClick={() => handlePreClose()} className="modal__icon" />
        </Box>
    )
}

ModalFirstStep.propTypes = {
    data: PropTypes.object,
    handlePreClose: PropTypes.func,
    step: PropTypes.number,
    contentModalFirst: PropTypes.node,
    footerModal: PropTypes.node
}

export default ModalFirstStep
