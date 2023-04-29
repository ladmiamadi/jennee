import React from 'react'
import Input from '@common/input/Input'
import { INPUT } from '@constants/inputConst'
import TextArea from '@common/input/TextArea'
import Select from '@common/select/Select'
import PropTypes from 'prop-types'

const EventModalFirstStep = ({ formValue, errors, setFormValue, handleChange }) => {
    const eventTypeOptions = ['', 'Party', 'Concert', 'Festival']

    const eventLocationsOptions = ['', 'Bars', 'NightClub', 'Terrasse', 'Rooftop', 'Séminaire']

    const eventOptionsVIP = ['', 'VIP', 'Dress code', 'Âge']
    const eventType = ['', 'Free-event', 'Evenement payant']

    return (
        <div>
            <div>
                <h4>Nom de l&apos;évènement</h4>
                <p>Remplissez le champ de texte suivant, le nom choisi apparaitra notamment pour le différencier de vos évènements</p>
                <Input
                    classname={'modal__input'}
                    name={INPUT.MODAL.NEW_EVENT.NAME}
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
                        name={INPUT.MODAL.NEW_EVENT.DESCRIPTION}
                    />
                </div>
                {formValue.description === '' ? <p>{errors.description}</p> : ''}
            </div>
            <div className={'modal__row'}>
                <div className={'modal__row__items'}>
                    <h4>Thèmes & Ambiances</h4>
                    <p>Décrivez l&apos;évènement, l&apos;ambiance, le theme, les guests...</p>
                    <Select
                        name={INPUT.MODAL.NEW_EVENT.TYPE}
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
                        name={INPUT.MODAL.NEW_EVENT.EVENT}
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
                        name={INPUT.MODAL.NEW_EVENT.PLACE}
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
                        name={INPUT.MODAL.NEW_EVENT.AUTHORISATION}
                        className="select__primary"
                        options={eventOptionsVIP}
                        value={formValue.authorisation}
                        handleChange={handleChange}
                        errors={errors.authorisation}
                    />
                    {formValue.authorisation === '' ? <p>{errors.authorisation}</p> : ''}
                </div>
            </div>
            <div>
                <div className={'text-center mb-24'}>
                    <h4>Sélectionner les nouvelles dates d’ouverture et de fermeture de l’évènement :</h4>
                </div>
                <div className={'d-flex justify-between'}>
                    <div className={'w-full mr-40'}>
                        <Input
                            classname={'modal__input-datetime'}
                            type={'datetime-local'}
                            name={INPUT.MODAL.NEW_EVENT.OPENING}
                            value={formValue.opening}
                            dataOnChange={{
                                state: formValue,
                                setState: setFormValue,
                                name: INPUT.MODAL.NEW_EVENT.OPENING
                            }}
                            onChange={handleChange}
                        />
                        <p className={'mt-8'}>Date et heure d’ouverture</p>
                    </div>
                    <div className={'w-full'}>
                        <Input
                            classname={'modal__input-datetime'}
                            type={'datetime-local'}
                            name={INPUT.MODAL.NEW_EVENT.ENDING}
                            value={formValue.ending}
                            dataOnChange={{
                                state: formValue,
                                setState: setFormValue,
                                name: INPUT.MODAL.NEW_EVENT.ENDING
                            }}
                            onChange={handleChange}
                        />
                        <p className={'mt-8'}>Date et heure de fermeture</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
EventModalFirstStep.propTypes = {
    formValue: PropTypes.object,
    errors: PropTypes.object,
    setFormValue: PropTypes.func,
    handleChange: PropTypes.func
}
export default EventModalFirstStep
