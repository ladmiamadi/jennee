import * as React from 'react'
import { Box, MobileStepper, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import PropTypes from 'prop-types'

const ModalFifthStep = ({ data, handlePreClose, step, contentModalFifth, footerModal }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
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
                {contentModalFifth}
            </div>
            {/*             FOOTER             */}
            {footerModal}
            <CloseIcon onClick={() => handlePreClose()} className="modal__icon" />
        </Box>
    )
}

ModalFifthStep.propTypes = {
    data: PropTypes.object,
    handlePreClose: PropTypes.func,
    step: PropTypes.number,
    contentModalFifth: PropTypes.node,
    footerModal: PropTypes.node
}

export default ModalFifthStep
