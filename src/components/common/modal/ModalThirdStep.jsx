import * as React from 'react'
import { Box, MobileStepper, Typography } from '@mui/material'
import Input from '../input/Input'
import Button from '../button/Button'
import CloseIcon from '@mui/icons-material/Close'
import PropTypes from 'prop-types'
import { ReactComponent as AccessTimeFilled } from '@assets/svg/ionic-time.svg'
import { INPUT } from '@constants/inputConst'
import AddIcon from '@mui/icons-material/Add'

const ModalThirdStep = ({ setFormValue, formValue, handleChange, handleNext, handlePreClose, errors, handlePrev, step }) => {
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
                <Typography variant={'h3'}>Etape 3 : Billetterie de l&apos;évènement</Typography>
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
                        <h4>Nombre de places totales disponibles pour l’évènement</h4>
                    </div>
                    <div className={'d-flex'}>
                        <div className={'w-full'}>
                            <Input
                                classname={'modal__input text-center'}
                                name={'name'}
                                type="number"
                                placeholder="Nombre total de place"
                                value={formValue.name}
                                errors={errors.name}
                                formValue={formValue.name}
                                required={true}
                                dataOnChange={{
                                    state: formValue,
                                    setState: setFormValue,
                                    name: INPUT.MODAL.NEW_EVENT.NAME
                                }}
                                onChange={handleChange}
                            />
                            {formValue.name === '' ? <p>{errors.name}</p> : ''}
                        </div>
                    </div>
                </div>
                <div>
                    <div className={'text-center mb-24'}>
                        <h4>Sélectionner les nouvelles dates d’ouverture et de fermeture de la billetterie de l’évènement :</h4>
                    </div>
                    <div className={'d-flex justify-between'}>
                        <div className={'w-full mr-40'}>
                            <Input
                                classname={'modal__input-datetime'}
                                onChange={null}
                                type={'datetime-local'}
                                dataOnChange={null}
                                name={''}
                                value={''}
                            />
                            <p className={'mt-8'}>Date et heure d’ouverture</p>
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

ModalThirdStep.propTypes = {
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

export default ModalThirdStep
