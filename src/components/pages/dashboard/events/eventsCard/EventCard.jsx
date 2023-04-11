import React from 'react'
import { Card, CardMedia, Typography, Skeleton, Box } from '@mui/material'
import PropTypes from 'prop-types'

/**
 The component for events card
 @typedef {Object} Props
 @property {String} day - Day of the event.
 @property {String} month - month of the event.
 @property {String} picture - picture of the event.
 @property {String} type - type of the event.
 @property {String} name - name of the event.
 @property {String} info - information as last modified of the event.
 @property {Boolean} loadgin - data id loading.
 @returns {JSX.Element} The EventCard component.
 */
const EventCard = ({ day, month, picture, type, name, info, loading }) => {
    return (
        <>
            {loading ? (
                <Box sx={{ pt: 0.5 }}>
                    <Skeleton variant="rounded" width={332} height={368} animation={'wave'} />
                    <Skeleton animation={'wave'} />
                    <Skeleton width="60%" animation={'wave'} />
                </Box>
            ) : (
                <Card className={'events-card'}>
                    <div className={'events-card__content'}>
                        <div className={'events-card__date'}>
                            <Typography className={'events-card__day'} variant={'body2'} component={'p'}>
                                {day}
                            </Typography>
                            <Typography className={'events-card__month'} variant={'body2'} component={'p'}>
                                {month}
                            </Typography>
                        </div>
                        <div className={'events-card__footer'}>
                            <Typography variant={'body3'} component={'p'}>
                                {type}
                            </Typography>
                            <Typography variant={'h3'} component={'p'}>
                                {name}
                            </Typography>
                            <Typography variant={'body2'} component={'p'}>
                                {info}
                            </Typography>
                        </div>
                    </div>
                    <CardMedia className={'events-card__picture'} component="img" alt="event" image={picture} />
                </Card>
            )}
        </>
    )
}
EventCard.propTypes = {
    day: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string,
    loading: PropTypes.bool
}
export default EventCard
