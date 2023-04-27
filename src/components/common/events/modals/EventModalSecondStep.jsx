import React from 'react'
import Input from '@common/input/Input'
import { INPUT } from '@constants/inputConst'
import AddIcon from '@mui/icons-material/Add'
import PropTypes from 'prop-types'

const EventModalSecondStep = ({ formValue, errors, setFormValue, handleChange }) => {
    return (
        <div>
            <div className={'text-center mb-24'}>
                <h4>Ajouter un contenu visuel à votre événement</h4>
            </div>
            <div className={'d-flex'}>
                <div>
                    <label
                        className={
                            errors.presentationCover ? 'modal__form-input--file modal__form-input--file--error' : 'modal__form-input--file'
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
                            errors.promotionCover ? 'modal__form-input--file modal__form-input--file--error' : 'modal__form-input--file'
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
    )
}
EventModalSecondStep.propTypes = {
    formValue: PropTypes.object,
    errors: PropTypes.object,
    setFormValue: PropTypes.func,
    handleChange: PropTypes.func
}
export default EventModalSecondStep
