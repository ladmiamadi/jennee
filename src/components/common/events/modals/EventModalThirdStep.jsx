import React from 'react'
import Input from '@common/input/Input'
import { INPUT } from '@constants/inputConst'
import PropTypes from 'prop-types'

const EventModalThirdStep = ({ formValue, errors, setFormValue, handleChange }) => {
    return (
        <div>
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
    )
}
EventModalThirdStep.propTypes = {
    formValue: PropTypes.object,
    errors: PropTypes.object,
    setFormValue: PropTypes.func,
    handleChange: PropTypes.func
}

export default EventModalThirdStep
