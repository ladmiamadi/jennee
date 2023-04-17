import * as React from 'react'
import { Box, Typography } from '@mui/material'

import PropTypes from 'prop-types'
import MobileStepper from '@mui/material/MobileStepper'
import Input from '@common/input/Input'
import Select from '@common/select/Select'
import Button from '@common/button/Button'
import CloseIcon from '@mui/icons-material/Close'
import TextArea from '@common/input/TextArea'
import { INPUT } from '@constants/inputConst'

const ModalFirstStep = ({ formValue, setFormValue, handleChange, handleNext, handleClose, errors, step }) => {
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
    const eventType = ['', 'Free-event', 'Evenement payant']

    return (
        <Box className="modal" sx={style}>
            <div className="modal__container">
                <Typography variant={'h3'}>Etape 1 : Informations générales</Typography>
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
                    <div>
                        <h4>Nom de l&apos;évènement</h4>
                        <p>
                            Remplissez le champ de texte suivant, le nom choisi apparaitra notamment pour le différencier de vos évènements
                        </p>
                        <Input
                            classname={'modal__input'}
                            name={'name'}
                            type="text"
                            placeholder="Ex : Soirée d'Halloween"
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
                    <div>
                        <h4>Description de l&apos;évènement</h4>
                        <p>Décrivez l&apos;évènement, l&apos;ambiance, le theme, les guests...</p>
                        <div>
                            <TextArea
                                classname={'modal__textarea'}
                                type="text"
                                required={false}
                                value={formValue.description}
                                dataOnChange={{
                                    state: formValue,
                                    setState: setFormValue,
                                    name: INPUT.MODAL.NEW_EVENT.DESCRIPTION
                                }}
                                onChange={handleChange}
                                placeholder="Ex : Thème, lieu, occasion, …"
                                name={'description'}
                            />
                        </div>
                        {formValue.description === '' ? <p>{errors.description}</p> : ''}
                    </div>
                    <div className={'modal__row'}>
                        <div className={'modal__row__items'}>
                            <h4>Thèmes & Ambiances</h4>
                            <p>Décrivez l&apos;évènement, l&apos;ambiance, le theme, les guests...</p>
                            <Select
                                name="type"
                                className="select__primary"
                                options={eventTypeOptions}
                                value={formValue.type}
                                handleChange={handleChange}
                                errors={errors.type}
                            />
                            {formValue.type === '' ? <p>{errors.type}</p> : ''}
                        </div>
                        <div className={'modal__row__items'}>
                            <h4>Type event</h4>
                            <p>Décrivez l&apos;évènement, l&apos;ambiance, le theme, les guests...</p>
                            <Select
                                name="event"
                                className="select__primary"
                                options={eventType}
                                value={formValue.event}
                                handleChange={handleChange}
                                errors={errors.event}
                            />
                            {formValue.event === '' ? <p>{errors.event}</p> : ''}
                        </div>
                    </div>
                    <div className={'modal__row'}>
                        <div className={'modal__row__items'}>
                            <h4>Type de lieu</h4>
                            <Select
                                name="place"
                                className="select__primary"
                                options={eventLocationsOptions}
                                value={formValue.place}
                                handleChange={handleChange}
                                errors={errors.place}
                            />
                            {formValue.place === '' ? <p>{errors.place}</p> : ''}
                        </div>
                        <div className={'modal__row__items'}>
                            <h4>Autorisation d&apos;entrée</h4>
                            <Select
                                name="authorisation"
                                className="select__primary"
                                options={eventOptionsVIP}
                                value={formValue.authorisation}
                                handleChange={handleChange}
                                errors={errors.authorisation}
                            />
                            {formValue.authorisation === '' ? <p>{errors.authorisation}</p> : ''}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal__button">
                <Button handleClick={handleNext} className="button__primary" name="Étape suivante" />
            </div>
            <CloseIcon onClick={() => handleClose()} className="modal__icon" />
        </Box>
    )
}

ModalFirstStep.propTypes = {
    formValue: PropTypes.object,
    setFormValue: PropTypes.func,
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
