import * as React from 'react'
import { Box, MobileStepper, Typography } from '@mui/material'
import Input from '../input/Input'
import Button from '../button/Button'
import CloseIcon from '@mui/icons-material/Close'
import PropTypes from 'prop-types'
import AddIcon from '@mui/icons-material/Add'
import { INPUT } from '@constants/inputConst'

const ModalSecondStep = ({ setFormValue, formValue, handleChange, handlePreClose, errors, handlePrev, handleNext, step }) => {
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
                <Typography variant={'h3'}>Etape 2 : Contenu à publier</Typography>
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
                        <h4>Ajouter un contenu visuel à votre événement</h4>
                    </div>
                    <div className={'d-flex'}>
                        <div>
                            <label
                                className={
                                    errors.presentationCover
                                        ? 'modal__form-input--file modal__form-input--file--error'
                                        : 'modal__form-input--file'
                                }
                                htmlFor="uploadCover">
                                <Input
                                    dataOnChange={{
                                        state: formValue,
                                        setState: setFormValue,
                                        name: INPUT.MODAL.NEW_EVENT.PRESENTATION_COVER
                                    }}
                                    value={formValue.presentationCover}
                                    name="presentationCover"
                                    id="uploadCover"
                                    type="file"
                                    classname={'modal__form-input__input-file'}
                                    onChange={handleChange}
                                />
                                <img
                                    className="modal__form-input--file__preview-img"
                                    src={formValue.presentationCover ? URL.createObjectURL(formValue.presentationCover) : '#'}
                                    alt={formValue.presentationCover && 'preview-img'}
                                />
                                <div className="modal__form-input--file__icon">
                                    <AddIcon style={{ fontSize: '4em' }} />
                                    <p>Photo de 40 Mo max</p>
                                </div>
                            </label>
                            <h4 className={'text-center mb-16 mt-16'}>Photo de couverture</h4>
                        </div>
                        <div className={'ml-40'}>
                            <label
                                className={
                                    errors.promotionCover
                                        ? 'modal__form-input--file modal__form-input--file--error'
                                        : 'modal__form-input--file'
                                }
                                htmlFor="uploadPromo">
                                <Input
                                    dataOnChange={{
                                        state: formValue,
                                        setState: setFormValue,
                                        name: INPUT.MODAL.NEW_EVENT.PROMOTION_COVER
                                    }}
                                    value={formValue.promotionCover}
                                    name="promotionCover"
                                    id="uploadPromo"
                                    type="file"
                                    classname={'modal__form-input__input-file'}
                                    onChange={handleChange}
                                />
                                <div>
                                    <img
                                        className="modal__form-input--file__preview-img"
                                        src={formValue.promotionCover ? URL.createObjectURL(formValue.promotionCover) : '#'}
                                        alt={formValue.promotionCover && 'preview-img'}
                                    />
                                </div>
                                <div className="modal__form-input--file__icon">
                                    <AddIcon style={{ fontSize: '4em' }} className="modal__form-input--file__icon" />
                                    <p>Vidéo / Photo de 120 Mo max</p>
                                </div>
                            </label>
                            <h4 className={'text-center mb-16 mt-16'}>Photo / Vidéo promotionnelle</h4>
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

ModalSecondStep.propTypes = {
    formValue: PropTypes.object,
    handleChange: PropTypes.func,
    handlePreClose: PropTypes.func,
    setFormValue: PropTypes.func,
    errors: PropTypes.object,
    setErrors: PropTypes.func,
    handlePrev: PropTypes.func,
    handleNext: PropTypes.func,
    step: PropTypes.number
}

export default ModalSecondStep
