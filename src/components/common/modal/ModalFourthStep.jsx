import * as React from 'react'
import { Box, Divider, MobileStepper, Typography } from '@mui/material'
import Input from '../input/Input'
import Button from '../button/Button'
import CloseIcon from '@mui/icons-material/Close'
import PropTypes from 'prop-types'
import { INPUT } from '@constants/inputConst'
import AddIcon from '@mui/icons-material/Add'

const ModalFourthStep = ({ handleNext, handlePreClose, handlePrev, step }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        bgcolor: 'background.paper',
        boxShadow: 24,
        padding: 4,
        borderRadius: 3,
        minWidth: '740px'
    }

    return (
        <Box className="modal" sx={style}>
            <div className="modal__container">
                <Typography variant={'h3'}>Etape 4 : Billetterie de l&apos;évènement</Typography>
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
                <div>
                    <div className={'text-center mb-24'}>
                        <h4>Créez une catégorie de billet</h4>
                    </div>
                    <div className={'modal__new-ticketing-category'}>
                        <AddIcon />
                        <p>Créer une nouvelle catégorie</p>
                    </div>
                    <div className={'modal__button-skip-step'}>
                        <Button handleClick={handlePrev} className="button__secondary" name="Passer cette étape" />
                    </div>
                    <Divider>OU</Divider>
                </div>
            </div>
            <div className={'d-flex justify-between'}>
                <div className="modal__button mr-40">
                    <Button handleClick={handlePrev} className="button__secondary" name="Étape précédente" />
                </div>
                <div className="modal__button">
                    <Button handleClick={handleNext} className="button__primary" name="Étape suivante" />
                </div>
            </div>
            <CloseIcon onClick={() => handlePreClose()} className="modal__icon" />
        </Box>
    )
}

ModalFourthStep.propTypes = {
    handleNext: PropTypes.func,
    formValue: PropTypes.object,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    handlePreClose: PropTypes.func,
    setFormValue: PropTypes.func,
    errors: PropTypes.object,
    setErrors: PropTypes.func,
    handlePrev: PropTypes.func,
    step: PropTypes.number
}

export default ModalFourthStep
