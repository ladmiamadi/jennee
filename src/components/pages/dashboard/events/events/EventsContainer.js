import React, { useState } from 'react'
import EventsComponent from '@components/pages/dashboard/events/events/EventsComponent'
import ModalEvent from '@common/modal/Modal'
import EventModalFirstStep from '@common/events/modals/EventModalFirstStep'
import EventModalSecondStep from '@common/events/modals/EventModalSecondStep'
import EventModalThirdStep from '@common/events/modals/EventModalThirdStep'
import EventModalFourthStep from '@common/events/modals/EventModalFourthStep'
import EventModalFifthStep from '@common/events/modals/EventModalFifthStep'
import EventModalFooter from '@common/events/modals/EventModalFooter'

const EventsContainer = () => {
    const [open, setOpen] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [errors, setErrors] = useState({})
    const [step, setStep] = useState(1)
    const [lastStep, setLastStep] = useState(null)
    const [formValue, setFormValue] = useState({
        name: '',
        description: '',
        type: '',
        event: '',
        place: '',
        authorisation: '',
        presentationCover: '',
        promotionCover: '',
        totalNumberPlaces: 0,
        opening: '',
        ending: '',
        ticketingOpening: '',
        ticketingEnding: '',
        publication: ''
    })
    const handleOpen = () => {
        setOpen(true)
    }
    const handlePreClose = () => {
        handleLastStep()
        setStep(0)
    }

    const handleClose = () => {
        setStep(1)
        setLastStep(null)
        setOpen(false)
    }
    const handleCloseDraft = () => {
        setOpen(false)
    }

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
        handleLastStep()
    }
    const handlePrev = () => {
        setStep(step - 1)
        handleLastStep()
    }
    const handleLastStep = () => setLastStep(step)
    const handleComeLastStep = () => setStep(lastStep)

    setTimeout(() => {
        setLoading(false)
    }, 2000)
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
                data={{
                    modalFirst: {
                        title: 'Etape 1 : Informations générales'
                    },
                    modalSecond: {
                        title: 'Etape 2 : Contenu à publier'
                    },
                    modalThird: {
                        title: "Etape 3 : Billetterie de l';évènement"
                    },
                    modalFourth: {
                        title: "Etape 4 : Billetterie de l';évènement"
                    },
                    modalFifth: {
                        title: "Etape 5 : Publication de l';évènement"
                    }
                }}
                contentModalFirst={
                    <EventModalFirstStep formValue={formValue} errors={errors} setFormValue={setFormValue} handleChange={handleChange} />
                }
                contentModalSecond={
                    <EventModalSecondStep formValue={formValue} errors={errors} setFormValue={setFormValue} handleChange={handleChange} />
                }
                contentModalThird={
                    <EventModalThirdStep formValue={formValue} errors={errors} setFormValue={setFormValue} handleChange={handleChange} />
                }
                contentModalFourth={
                    <EventModalFourthStep formValue={formValue} errors={errors} setFormValue={setFormValue} handleChange={handleChange} />
                }
                contentModalFifth={
                    <EventModalFifthStep formValue={formValue} errors={errors} setFormValue={setFormValue} handleChange={handleChange} />
                }
                footerModal={<EventModalFooter step={step} handlePrev={handlePrev} handleNext={handleNext} />}
                open={open}
                handleCloseDraft={handleCloseDraft}
                handleClose={handleClose}
                formValue={formValue}
                handlePreClose={handlePreClose}
                handleComeLastStep={handleComeLastStep}
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
