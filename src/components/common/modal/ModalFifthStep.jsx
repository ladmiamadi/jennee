import * as React from 'react'
import { Box, Divider, MobileStepper, Typography } from '@mui/material'
import Input from '../input/Input'
import Button from '../button/Button'
import CloseIcon from '@mui/icons-material/Close'
import PropTypes from 'prop-types'
import { ReactComponent as AccessTimeFilled } from '@assets/svg/ionic-time.svg'
import { INPUT } from '@constants/inputConst'
import AddIcon from '@mui/icons-material/Add'

const ModalFifthStep = ({ data, handlePreClose, handlePrev, handleNext, step, contentModalFifth }) => {
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
            <div className={'modal__button-skip-step'}>
                <Button handleClick={handlePrev} className="button__secondary" name="Planifier la publication" />
            </div>
            <Divider>OU</Divider>
            <div className={'d-flex justify-between'}>
                <div className="modal__button mr-40">
                    <Button handleClick={handlePrev} className="button__secondary" name="Étape précédente" />
                </div>
                <div className="modal__button">
                    <Button handleClick={handleNext} className="button__primary" name="Publier l’évenement maintenant" />
                </div>
            </div>
            <CloseIcon onClick={() => handlePreClose()} className="modal__icon" />
        </Box>
    )
}

ModalFifthStep.propTypes = {
    data: PropTypes.object,
    handlePreClose: PropTypes.func,
    handlePrev: PropTypes.func,
    handleNext: PropTypes.func,
    step: PropTypes.number,
    contentModalFifth: PropTypes.node
}

export default ModalFifthStep
