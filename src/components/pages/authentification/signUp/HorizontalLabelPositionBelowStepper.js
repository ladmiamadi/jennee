import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepperConnector from './StepperConnector.jsx'
import PropTypes from 'prop-types'

/**

HorizontalLabelPositionBelowStepper is a functional component that renders a horizontal stepper with labels below.
@param {Object} props - The component props
@param {number} props.page - The current page number of the stepper
@returns {JSX.Element} A horizontal stepper with labels below
*/

const steps = ['Informations Personnelles', 'Organisation Etudiante', 'Informations Bancaires', 'Identité visuel']

const HorizontalLabelPositionBelowStepper = ({ page }) => {
    return (
        <Box sx={{ width: '70%', marginLeft: '15%' }}>
            <Stepper activeStep={page} connector={<StepperConnector />} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel />
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}

HorizontalLabelPositionBelowStepper.propTypes = {
    page: PropTypes.number
}

export default HorizontalLabelPositionBelowStepper
