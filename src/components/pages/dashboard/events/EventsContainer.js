import React, { useState } from 'react'
import EventsComponent from '@components/pages/dashboard/events/EventsComponent'

const EventsContainer = () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [formData, setFormData] = useState({
        eventName: '',
        eventDescription: '',
        eventTheme: '',
        eventLocation: '',
        eventVIP: '',
        eventPresentationCover: '',
        eventPromotionCover: ''
    })

    const handleChange = (event) => {
        console.log(event)
        const { name, value, files } = event.target
        if (files) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: files[0]
            }))
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value
            }))
        }
    }

    const handleSubmit = (event) => {
        console.log(formData)

        let newErrors = {}

        if (formData.eventName === '') {
            newErrors.eventName = '*Champs requis'
        }

        if (formData.eventDescription === '') {
            newErrors.eventDescription = '*Champs requis'
        }

        if (formData.eventTheme === '') {
            newErrors.eventTheme = '*Sélection requise'
        }

        if (formData.eventLocation === '') {
            newErrors.eventLocation = '*Sélection requise'
        }

        if (formData.eventVIP === '') {
            newErrors.eventVIP = '*Sélection requise'
        }

        if (formData.eventPresentationCover === '') {
            newErrors.eventPresentationCover = '*Sélection requise'
        }

        if (formData.eventPromotionCover === '') {
            newErrors.eventPromotionCover = '*Sélection requise'
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            // Submit the form
            console.log('Form submitted!')
        }
    }

    const [errors, setErrors] = useState({})

    const [step, setStep] = useState(1)

    const handleNext = () => {
        setStep(step + 1)
    }

    const handlePrev = () => {
        setStep(step - 1)
    }

    return (
        <EventsComponent
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            open={open}
            setOpen={setOpen}
            handleOpen={handleOpen}
            handleClose={handleClose}
            errors={errors}
            setErrors={setErrors}
            step={step}
            setStep={setStep}
            handleNext={handleNext}
            handlePrev={handlePrev}
        />
    )
}

export default EventsContainer
