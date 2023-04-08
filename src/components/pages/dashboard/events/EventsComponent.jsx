import HeaderEvent from '@components/common/headerEvent/HeaderEvent'
import EventList from '@components/common/eventList/EventList'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Dropdown from '@components/common/dropdown/Dropdown'
import Modal from '@components/common/modal/Modal'
import PropTypes from 'prop-types'

const EventsComponent = ({
    open,
    setOpen,
    handleOpen,
    handleClose,
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    errors,
    setErrors,
    step,
    setStep,
    handleNext,
    handlePrev
}) => {
    return (
        <>
            <HeaderEvent handleOpen={handleOpen} />
            <EventList />
            <Dropdown />
            <Outlet />
            <Modal
                open={open}
                setOpen={setOpen}
                handleOpen={handleOpen}
                handleClose={handleClose}
                formData={formData}
                setFormData={setFormData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
                setErrors={setErrors}
                step={step}
                setStep={setStep}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
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
