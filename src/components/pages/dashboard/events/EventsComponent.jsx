import HeaderPageContent from '@common/headerPageContent/HeaderPageContent'
import React from 'react'
import PropTypes from 'prop-types'
import { EVENT_MENU_ITEMS } from '@constants/eventMenuItemsConst'

const EventsComponent = ({ handleOpen }) => {
    return (
        <>
            <HeaderPageContent title={'Mes events'} menuItems={EVENT_MENU_ITEMS} handleOpen={handleOpen} />
        </>
    )
}

EventsComponent.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    handleOpen: PropTypes.func,
    handleClose: PropTypes.func,
    formData: PropTypes.object,
    setFormData: PropTypes.func,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    errors: PropTypes.object,
    setErrors: PropTypes.func,
    step: PropTypes.number,
    setStep: PropTypes.func,
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func
}

export default EventsComponent
