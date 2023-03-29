import { React, useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepperConnector from './StepperConnector.jsx'
import ComponentList from './ComponentList'
import EmailValidationValidator from './EmailValidationValidator'
import ValidatorStepOne from './SignUpValidator/ValidatorStepOne.js'
import ValidatorStepTwo from './SignUpValidator/ValidatorStepTwo.js'
import ValidatorStepThree from './SignUpValidator/ValidatorStepThree.js'
import ValidatorStepFour from './SignUpValidator/ValidatorStepFour.js'
/**

SignUpContainer component handles the sign up process by rendering a multi-step form
that collects user information and organization details. The component also includes
form validation and error handling. It uses Material-UI components such as Stepper,
Step and StepLabel to display the progress of the sign up process.
@returns {JSX.Element} The JSX code for the SignUpContainer component
*/
const SignUpContainer = () => {
    const [error, setError] = useState({
        name: false,
        surname: false,
        school: false,
        email: false,
        password: false,
        city: false,
        name_organisation: false,
        role_organisation: false,
        siret_number: false,
        description: false,
        name_account_holder: false,
        bic: false,
        rib: false,
        logo: false,
        banner: false,
        code: false
    })
    const [errortype, setErrortype] = useState({
        name: '',
        surname: '',
        school: '',
        email: '',
        password: '',
        city: '',
        name_organisation: '',
        role_organisation: '',
        siret_number: '',
        description: '',
        name_account_holder: '',
        bic: '',
        rib: '',
        logo: '',
        banner: '',
        code: ''
    })
    const [formValue, setFormValue] = useState({
        name: '',
        surname: '',
        school: '',
        email: '',
        password: '',
        city: '',
        name_organisation: '',
        role_organisation: '',
        siret_number: '',
        description: '',
        name_account_holder: '',
        bic: '',
        rib: '',
        logo: '',
        banner: '',
        code: ''
    })
    const [page, setPage] = useState(0)
    const HandleSubmit = (event) => {
        console.log(formValue)
        event.preventDefault()
        const { name, surname, school, email, password } = formValue
        const { city, name_organisation, role_organisation, siret_number, description } = formValue
        const { name_account_holder, bic, rib } = formValue
        const { logo, banner } = formValue
        const { code } = formValue
        const formDataStepOne = { name, surname, school, email, password }
        const formDataStepTwo = {
            city,
            name_organisation,
            role_organisation,
            siret_number,
            description
        }
        const formDataStepThree = { name_account_holder, bic, rib }
        const formDataStepFour = { logo, banner }
        const formDataStepFive = { code }
        switch (page) {
            case 0:
                if (ValidatorStepOne(formDataStepOne, error, setError, errortype, setErrortype)) {
                    setPage((page) => page + 1)
                } else {
                    setPage((page) => page)
                }
                break
            case 1:
                if (ValidatorStepTwo(formDataStepTwo, error, setError, errortype, setErrortype)) {
                    setPage((page) => page + 1)
                } else {
                    setPage((page) => page)
                }
                break
            case 2:
                if (ValidatorStepThree(formDataStepThree, error, setError, errortype, setErrortype)) {
                    setPage((page) => page + 1)
                } else {
                    setPage((page) => page)
                }
                break
            case 3:
                if (ValidatorStepFour(formDataStepFour, error, setError, errortype, setErrortype)) {
                    setPage((page) => page + 1)
                } else {
                    setPage((page) => page)
                }
                break
            case 4:
                if (EmailValidationValidator(formDataStepFive, error, setError, errortype, setErrortype)) {
                    setPage((page) => page + 1)
                } else {
                    setPage((page) => page)
                }
                break
            default:
                setPage((page) => page)
        }
    }

    const steps = ['Informations Personnelles', 'Organisation Etudiante', 'Informations Bancaires', 'Identité visuel']

    const HorizontalLabelPositionBelowStepper = () => {
        return (
            <Box sx={{ width: '70%', marginLeft: '15%' }}>
                <Stepper activeStep={page} connector={<StepperConnector />} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            {' '}
                            <StepLabel />{' '}
                        </Step>
                    ))}
                </Stepper>
            </Box>
        )
    }
    const SignupComponentList = ComponentList({
        setFormValue,
        formValue,
        HandleSubmit,
        page,
        setPage,
        HorizontalLabelPositionBelowStepper,
        error,
        setError,
        errortype,
        setErrortype
    })
    return <div>{SignupComponentList[page]}</div>
}
export default SignUpContainer
