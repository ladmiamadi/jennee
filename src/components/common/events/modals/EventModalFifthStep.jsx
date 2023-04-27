import React from 'react'
import Input from '@common/input/Input'
import { INPUT } from '@constants/inputConst'
import Button from '@common/button/Button'
import { Divider } from '@mui/material'
import PropTypes from 'prop-types'
import EventModalFourStep from '@common/events/modals/EventModalFourthStep'

const EventModalFirthStep = ({ formValue, errors, setFormValue, handleChange }) => {
    return (
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
            {/*<div className={'modal__button-skip-step'}>*/}
            {/*    <Button handleClick={handlePrev} className="button__secondary" name="Planifier la publication" />*/}
            {/*</div>*/}
            {/*<Divider>OU</Divider>*/}
        </div>
    )
}
EventModalFirthStep.propTypes = {
    formValue: PropTypes.object,
    errors: PropTypes.object,
    setFormValue: PropTypes.func,
    handleChange: PropTypes.func
}
export default EventModalFirthStep
