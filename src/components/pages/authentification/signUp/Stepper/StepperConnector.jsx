import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import { styled } from '@mui/material/styles'

/**

Styled component for a StepConnector in a Stepper component.
@typedef {import('@mui/material/StepConnector').StepConnectorProps} StepConnectorProps
@typedef {import('@mui/material/styles').StyledComponentPropsWithRef<typeof StepConnector>} StepperConnectorProps
@returns {JSX.Element}
@constructor
*/
export const StepperConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-52.5% + 16px)',
        right: 'calc(47.5% + 16px)'
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#4F5EAB'
        }
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#4F5EAB'
        }
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1
    }
}))

export default StepperConnector
