import * as React from 'react'
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'
import Input from '../input/Input'
import Button from '../button/Button'
import CloseIcon from '@mui/icons-material/Close'
import PropTypes from 'prop-types'
import Select from '../../common/select/Select'
import MobileStepper from '@mui/material/MobileStepper'

const ModalFirstStep = ({
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    handleClose,
    errors,
    setErrors,
    handleNext,
    handlePrev,
    step
}) => {
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

    const eventTypeOptions = ['', 'Party', 'Concert', 'Festival']

    const eventLocationsOptions = ['', 'Bars', 'NightClub', 'Terrasse', 'Rooftop', 'Séminaire']

    const eventOptionsVIP = ['', 'VIP', 'Dress code', 'Âge']

    console.log(formData.eventName.length)

    return (
        <Box className="modal" sx={style}>
            <Grid className="modal__first-step" item xs={12}>
                <Grid item xs={12}>
                    <h1>Etape 1 : Informations générales</h1>
                </Grid>
                <Grid item xs={12}>
                    <MobileStepper variant="progress" steps={6} position="static" activeStep={step} className="MuiMobileStepper-progress">
                        <div className="modal__stepper-blank"></div>
                    </MobileStepper>
                </Grid>
                <Grid item xs={12}>
                    <h2>Nom de l&apos;évènement</h2>
                    <p>Remplissez le champ de texte suivant, le nom choisi apparaitra notammement pour le différencier de vos évènements</p>
                    <form className="modal__form-input">
                        <Input
                            name="eventName"
                            className="input__primary"
                            placeholder="Ex : Soirée d'Halloween"
                            value={formData.eventName}
                            handleChange={handleChange}
                            errors={errors.eventName}
                            formData={formData.eventName}
                        />
                        {formData.eventName === '' ? <p>{errors.eventName}</p> : ''}
                    </form>
                </Grid>
            </Grid>
            <Grid className="modal__first-step">
                <h2>Description de l&apos;évènement</h2>
                <p>Décrivez l&apos;évènement, l&apos;ambiance, le theme, les guests...</p>
                <form className="modal__form-input">
                    <Input
                        name="eventDescription"
                        className="input__primary input__primary--text"
                        placeholder="Ex : Thème, lieu, occasion..."
                        value={formData.eventDescription}
                        handleChange={handleChange}
                        errors={errors.eventDescription}
                    />
                    {formData.eventDescription === '' ? <p>{errors.eventDescription}</p> : ''}
                </form>
            </Grid>
            <Grid className="modal__first-step" container spacing={2}>
                <Grid item xs={12}>
                    <h2>Thèmes & Ambiances</h2>
                    <p>Décrivez l&apos;évènement, l&apos;ambiance, le theme, les guests...</p>
                </Grid>
                <Grid item xs={8}>
                    <form className="modal__form-input">
                        <Select
                            name="eventTheme"
                            className="select__primary"
                            options={eventTypeOptions}
                            value={formData.eventTheme}
                            handleChange={handleChange}
                            errors={errors.eventTheme}
                        />
                        {formData.eventTheme === '' ? <p>{errors.eventTheme}</p> : ''}
                    </form>
                </Grid>
                <Grid item xs={4}>
                    <Button handleClick={''} className="button__secondary" text="Sélectionner" />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6} className="modal__first-step">
                    <Grid item={12}>
                        <h2>Type de lieu</h2>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <form className="modal__form-input">
                                <Select
                                    name="eventLocation"
                                    className="select__primary"
                                    options={eventLocationsOptions}
                                    value={formData.eventLocation}
                                    handleChange={handleChange}
                                    errors={errors.eventLocation}
                                />
                                {formData.eventLocation === '' ? <p>{errors.eventLocation}</p> : ''}
                            </form>
                        </Grid>
                        <Grid item xs={4}>
                            <Button handleClick={''} className="button__secondary" text="Sélectionner" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} className="modal__first-step">
                    <Grid item xs={12}>
                        <h2>Autorisation d&apos;entrée</h2>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <form className="modal__form-input">
                                <Select
                                    name="eventVIP"
                                    className="select__primary"
                                    options={eventOptionsVIP}
                                    value={formData.eventVIP}
                                    handleChange={handleChange}
                                    errors={errors.eventVIP}
                                />
                                {formData.eventVIP === '' ? <p>{errors.eventVIP}</p> : ''}
                            </form>
                        </Grid>
                        <Grid item xs={4}>
                            <Button handleClick={''} className="button__secondary" text="Sélectionner" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className="modal__button">
                <Button handleClick={handleNext} className="button__primary" text="Étape suivante" />
            </Grid>
            <CloseIcon onClick={() => handleClose()} className="modal__icon" />
        </Box>
    )
}

ModalFirstStep.propTypes = {
    formData: PropTypes.object,
    setFormData: PropTypes.func,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleClose: PropTypes.func,
    errors: PropTypes.object,
    setErrors: PropTypes.func,
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func,
    step: PropTypes.number
}

export default ModalFirstStep
