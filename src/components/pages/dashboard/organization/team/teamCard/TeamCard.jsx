import React from 'react'
import { Box, Card, CardMedia, Skeleton, Typography } from '@mui/material'
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded'
import PropTypes from 'prop-types'

/**
 * @typedef {{id: number, name: string, picture: string, role: string, status: string, description: string}} Member
 * @param {Member} member - The member to be displayed
 * @param {boolean} loading data loading status
 * @returns {JSX.Element} - The TeamCard component
 */
const TeamCard = ({ loading, member }) => {
    return (
        <>
            {loading ? (
                <Box sx={{ pt: 0.5 }}>
                    <Skeleton variant="rounded" width={332} height={368} animation={'wave'} />
                    <Skeleton animation={'wave'} />
                    <Skeleton width="60%" animation={'wave'} />
                </Box>
            ) : (
                <Card className="team__card">
                    <CardMedia image={member.picture} title={member.name} component="img" alt="member" />
                    <div className={'team__card__content'}>
                        <div className={'team__card__content__title'}>
                            <Typography gutterBottom variant="h6" component="div" className={'team__card__content__name'}>
                                {member.name}
                            </Typography>
                        </div>

                        <div className={'team__card__content__status'}>
                            <Brightness1RoundedIcon
                                color={member.status === 'En ligne' ? 'success' : 'disconnected'}
                                fontSize={'small'}
                                className={'team__card__content__icon'}
                            />
                            <Typography variant="caption" gutterBottom className={'team__card__content__status__caption'}>
                                {member.status}
                            </Typography>
                            <Typography variant="caption" gutterBottom className={'team__card__content__status__role'}>
                                {member.role}
                            </Typography>
                        </div>
                    </div>
                </Card>
            )}
        </>
    )
}

TeamCard.prototype = {
    member: PropTypes.object.isRequired,
    loading: PropTypes.bool
}

export default TeamCard
