import React from 'react'
import { Typography } from '@mui/material'
import EventCard from '@components/pages/dashboard/events/eventsCard/EventCard'
import { EVENTS_LIST } from '@fixtures/eventsList'
import { ROUTES } from '@constants/routesConst'
import { Link } from 'react-router-dom'

const ProfileNextEvent = () => {
    const event = EVENTS_LIST[0]
    return (
        <div className={'profile__content__informations__event'}>
            <Typography variant="subtitle1" gutterBottom sx={{ marginBottom: '20px' }}>
                Prochain Event
            </Typography>
            <Link to={ROUTES.DASHBOARD.EVENTS.CHILDREN.EVENTS_DETAILS.PATH}>
                <EventCard
                    day={event.day}
                    month={event.month}
                    type={event.type}
                    name={event.name}
                    picture={event.picture}
                    info={event.info}
                />
            </Link>
        </div>
    )
}

export default ProfileNextEvent
