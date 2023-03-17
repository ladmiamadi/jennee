import React from 'react'
import { Grid, Box } from '@mui/material'
import Card from '../card/Card'
import { Link } from 'react-router-dom'
import { ROUTES } from '@constants/routesConst'

const EventList = () => {
    return (
        <Grid container className="event-list">
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Link to={ROUTES.DASHBOARD.EVENTS_DETAILS.PATH}>
                    <Card />
                </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Link to={ROUTES.DASHBOARD.EVENTS_DETAILS.PATH}>
                    <Card />
                </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={2.4} className="event-list__wrap">
                <Card />
            </Grid>
        </Grid>
    )
}

export default EventList
