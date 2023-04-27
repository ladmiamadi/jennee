import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import PropTypes from 'prop-types'

const EventModalFourStep = ({ formValue, errors, setFormValue, handleChange }) => {
    return (
        <div>
            <div className={'text-center mb-24'}>
                <h4>Créez une catégorie de billet</h4>
            </div>
            <div className={'modal__new-ticketing-category'}>
                <AddIcon />
                <p>Créer une nouvelle catégorie</p>
            </div>
            {/*<div className={'modal__button-skip-step'}>*/}
            {/*    <Button handleClick={handlePrev} className="button__secondary" name="Passer cette étape" />*/}
            {/*</div>*/}
            {/*<Divider>OU</Divider>*/}
        </div>
    )
}
EventModalFourStep.propTypes = {
    formValue: PropTypes.object,
    errors: PropTypes.object,
    setFormValue: PropTypes.func,
    handleChange: PropTypes.func
}
export default EventModalFourStep
