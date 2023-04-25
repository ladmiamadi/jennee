import React from 'react'
import { Box } from '@mui/material'
import HeaderEventDetails from '@common/headerPageContent/HeaderEventsDetails'

const EventDetailsComponent = () => {
    return (
        <Box className={'events-details-container'}>
            <HeaderEventDetails />
        </Box>
    )
}

export default EventDetailsComponent
