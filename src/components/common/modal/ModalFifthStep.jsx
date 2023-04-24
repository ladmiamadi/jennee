import * as React from 'react'
import { Box, Divider, MobileStepper, Typography } from '@mui/material'
import Input from '../input/Input'
import Button from '../button/Button'
import CloseIcon from '@mui/icons-material/Close'
import PropTypes from 'prop-types'
import { ReactComponent as AccessTimeFilled } from '@assets/svg/ionic-time.svg'
import { INPUT } from '@constants/inputConst'
import AddIcon from '@mui/icons-material/Add'

const ModalFifthStep = ({ setFormValue, formValue, handleChange, handleNext, handlePreClose, errors, handlePrev, step }) => {
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
                <Typography variant={'h3'}>Etape 5 : Publication de l’&apos;évènement</Typography>
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
                        <h4>Sélectionner une date de publication de l’Event</h4>
                    </div>
                    <div>
                        <div className={'d-flex justify-between'}>
                            <div className={'w-full mr-40'}>
                                <Input
                                    classname={'modal__input-datetime'}
                                    onChange={null}
                                    type={'datetime-local'}
                                    dataOnChange={{
                                        state: formValue,
                                        setState: setFormValue,
                                        name: INPUT.MODAL.NEW_EVENT.PUBLICATION
                                    }}
                                    name={'publication'}
                                    value={formValue.publication}
                                />
                                <p className={'mt-8'}>Date de publication</p>
                            </div>
                            <div className={'w-full'}>
                                <Input
                                    classname={'modal__input-datetime'}
                                    onChange={null}
                                    type={'datetime-local'}
                                    dataOnChange={null}
                                    name={''}
                                    value={''}
                                />
                                <p className={'mt-8'}>Date et heure de fermeture</p>
                            </div>
                        </div>
                    </div>
                    <div className={'modal__button-skip-step'}>
                        <Button handleClick={handlePrev} className="button__secondary" name="Planifier la publication" />
                    </div>
                    <Divider>OU</Divider>
                </div>
            </div>
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
    formValue: PropTypes.object,
    handleChange: PropTypes.func,
    handleNext: PropTypes.func,
    handlePreClose: PropTypes.func,
    setFormValue: PropTypes.func,
    errors: PropTypes.object,
    setErrors: PropTypes.func,
    handlePrev: PropTypes.func,
    step: PropTypes.number
}

export default ModalFifthStep
