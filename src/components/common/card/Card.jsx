import { Grid, Box } from '@mui/material'
import React from 'react'
import { ReactComponent as EventAvatar1 } from '../../../assets/svg/event/event-avatar-1.svg'
import { ReactComponent as EventAvatar2 } from '../../../assets/svg/event/event-avatar-2.svg'
import EventCover from '../../../assets/svg/event/event-cover.svg'

const Card = () => {
    return (
        <Grid className="card">
            <img alt="jenee-event-cover" className="card__img" src={EventCover} />
            <Box>
                <Grid className="card__avatar-wrap" item xs={2}>
                    <EventAvatar1 className="card__avatar-wrap__profil-1" />
                    <EventAvatar2 className="card__avatar-wrap__profil-2" />
                </Grid>
                <Grid className="card__description" item xs={12}>
                    <p className="card__description__type">Party</p>
                    <h1>Boum Boum</h1>
                    <p>Modifié il y a 2h</p>
                </Grid>
                <Grid className="card__date" item xs={12}>
                    <p className="card__date__number">21</p>
                    <p className="card__date__month">DEC</p>
                </Grid>
            </Box>
        </Grid>
    )
}

export default Card
