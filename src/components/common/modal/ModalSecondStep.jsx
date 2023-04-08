import * as React from 'react'
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'
import Input from '../input/Input'
import Button from '../button/Button'
import CloseIcon from '@mui/icons-material/Close'
import PropTypes from 'prop-types'
import AddIcon from '@mui/icons-material/Add'
import MobileStepper from '@mui/material/MobileStepper'

const ModalSecondStep = ({ formData, handleChange, handleSubmit, handleClose, errors, handlePrev, step }) => {
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
            <Grid className="modal__second-step" item xs={12}>
                <h1>Etape 2 : Contenu à publier</h1>
            </Grid>
            <Grid item xs={12}>
                <MobileStepper
                    variant="progress"
                    steps={6}
                    position="static"
                    activeStep={step}
                    sx={{ width: '100%', flexGrow: 1, padding: 0 }}
                />
            </Grid>
            <Grid container className="modal__second-step">
                <Grid item xs={12}>
                    <h3>Ajouter du contenu visuel</h3>
                </Grid>
                <Grid container spacing={2} columnSpacing={2}>
                    <Grid item xs={12} sm={6}>
                        <label
                            className={
                                errors.eventPresentationCover
                                    ? 'modal__form-input--file modal__form-input--file--error'
                                    : 'modal__form-input--file'
                            }
                            htmlFor="uploadCover">
                            <Input
                                value={formData.eventPresentationCover}
                                handleChange={handleChange}
                                name="eventPresentationCover"
                                id="uploadCover"
                                type="file"
                                className="input__primary input__primary--file"
                            />
                            <img
                                className="modal__form-input--file__preview-img"
                                src={formData.eventPresentationCover ? URL.createObjectURL(formData.eventPresentationCover) : '#'}
                                alt={formData.eventPresentationCover && 'preview-img'}
                            />
                            <div className="modal__form-input--file__icon">
                                <AddIcon style={{ fontSize: '4em' }} />
                                <p>Photo de 40 Mo max</p>
                            </div>
                        </label>
                        <h3>Photo de couverture</h3>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <label
                            className={
                                errors.eventPromotionCover
                                    ? 'modal__form-input--file modal__form-input--file--error'
                                    : 'modal__form-input--file'
                            }
                            htmlFor="uploadPromo">
                            <Input
                                value={formData.eventPromotionCover}
                                handleChange={handleChange}
                                name="eventPromotionCover"
                                id="uploadPromo"
                                type="file"
                                className="input__primary input__primary--file"
                            />
                            <img
                                className="modal__form-input--file__preview-img"
                                src={formData.eventPromotionCover ? URL.createObjectURL(formData.eventPromotionCover) : '#'}
                                alt={formData.eventPromotionCover && 'preview-img'}
                            />
                            <div className="modal__form-input--file__icon">
                                <AddIcon style={{ fontSize: '4em' }} className="modal__form-input--file__icon" />
                                <p>Vidéo / Photo de 120 Mo max</p>
                            </div>
                        </label>
                        <h3>Photo / Vidéo promotionnelle</h3>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className="modal__button">
                <Button handleClick={handleSubmit} className="button__primary" text="Étape suivante" />
            </Grid>
            <Grid item xs={12} className="modal__button">
                <Button handleClick={handlePrev} className="button__secondary" text="Étape précédente" />
            </Grid>
            <CloseIcon onClick={() => handleClose()} className="modal__icon" />
        </Box>
    )
}

ModalSecondStep.propTypes = {
    formData: PropTypes.object,
    setFormData: PropTypes.func,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleClose: PropTypes.func,
    errors: PropTypes.object,
    setErrors: PropTypes.func,
    handlePrev: PropTypes.func,
    handleNext: PropTypes.func,
    step: PropTypes.number
}

export default ModalSecondStep
