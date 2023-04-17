import React, { useState } from 'react'
import EventsComponent from '@components/pages/dashboard/events/events/EventsComponent'
import ModalEvent from '@common/modal/Modal'

const EventsContainer = () => {
    const [open, setOpen] = React.useState(true)
    const [loading, setLoading] = React.useState(true)
    const [errors, setErrors] = useState({})
    const [step, setStep] = useState(2)
    const [formValue, setFormValue] = useState({
        name: '',
        description: '',
        type: '',
        event: '',
        place: '',
        authorisation: '',
        presentationCover: '',
        promotionCover: ''
    })
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleChange = (state, setState, inputName, inputValue, event) => {
        const { name, value, files } = event.target
        if (files) {
            setFormValue((prevFormValue) => ({
                ...prevFormValue,
                [name]: files[0]
            }))
        } else {
            setFormValue((prevFormValue) => ({
                ...prevFormValue,
                [name]: value
            }))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let newErrors = {}
        if (formValue.name === '') {
            newErrors.name = '*Champs requis'
        }

        if (formValue.description === '') {
            newErrors.description = '*Champs requis'
        }

        if (formValue.type === '') {
            newErrors.type = '*Sélection requise'
        }

        if (formValue.place === '') {
            newErrors.place = '*Sélection requise'
        }

        if (formValue.authorisation === '') {
            newErrors.authorisation = '*Sélection requise'
        }

        if (formValue.presentationCover === '') {
            newErrors.presentationCover = '*Sélection requise'
        }

        if (formValue.promotionCover === '') {
            newErrors.promotionCover = '*Sélection requise'
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            // Submit the form
            console.log('Form submitted!')
        }
    }

    const handleNext = () => {
        if (step < 7) {
            setStep(step + 1)
        }
    }
    const handlePrev = () => {
        setStep(step - 1)
    }
    setTimeout(() => {
        setLoading(false)
    }, 2000)
    console.log(step)
    console.log(open)
    return (
        <>
            <EventsComponent
                formValue={formValue}
                setFormValue={setFormValue}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                open={open}
                setOpen={setOpen}
                handleOpen={handleOpen}
                handleClose={handleClose}
                errors={errors}
                setErrors={setErrors}
                loading={loading}
                step={step}
                setStep={setStep}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
            <ModalEvent
                open={open}
                handleClose={handleClose}
                formValue={formValue}
                setErrors={setErrors}
                setFormValue={setFormValue}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
                step={step}
                handleNext={handleNext}
                handlePrev={handlePrev}
                setStep={setStep}
                setOpen={setOpen}
            />
        </>
    )
}

export default EventsContainer
