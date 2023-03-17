import { ROUTES } from '@constants/routesConst'
import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../card/Card'

const EventList = () => {
    return (
        <Grid container>
            <Grid item xs={2.4} className="event-list-wrap">
                <Link to={ROUTES.DASHBOARD.EVENTS_DETAILS.PATH}>
                    <Card />
                </Link>
            </Grid>
            <Grid item xs={2.4} className="event-list-wrap">
                <Card />
            </Grid>
            <Grid item xs={2.4} className="event-list-wrap">
                <Card />
            </Grid>
            <Grid item xs={2.4} className="event-list-wrap">
                <Card />
            </Grid>
            <Grid item xs={2.4} className="event-list-wrap">
                <Card />
            </Grid>
        </Grid>
    )
}

export default EventList
