import React from 'react'
import { Box, Card, CardMedia, Skeleton, Typography } from '@mui/material'
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded'
import PropTypes from 'prop-types'

/**
 *
 * @param member {object} - The member to be displayed with details
 * @param loading {boolean} - The prop of the loading data status
 * @returns {JSX.Element} - The MoreMembersCard component
 * @constructor
 */
const MoreMembersCard = ({ member, loading }) => {
    return (
        <>
            {loading ? (
                <Box sx={{ pt: 0.5 }}>
                    <Skeleton variant="rounded" width={232} height={268} animation={'wave'} />
                    <Skeleton animation={'wave'} />
                    <Skeleton width="60%" animation={'wave'} />
                </Box>
            ) : (
                <Card className="more-members__card">
                    <CardMedia image={member.picture} title={member.name} component="img" alt="member" />
                    <div className={'more-members__card__content'}>
                        <div className={'more-members__card__content__title'}>
                            <Typography gutterBottom variant="h6" component="div" className={'more-members__card__content__name'}>
                                {member.name}
                            </Typography>
                        </div>

                        <div className={'more-members__card__content__status'}>
                            <Brightness1RoundedIcon
                                color={member.status === 'En ligne' ? 'success' : 'disconnected'}
                                fontSize={'small'}
                                className={'more-members__card__content__icon'}
                            />
                            <Typography variant="caption" gutterBottom className={'more-members__card__content__status__caption'}>
                                {member.status}
                            </Typography>
                            <Typography variant="caption" gutterBottom className={'more-members__card__content__status__role'}>
                                {member.role}
                            </Typography>
                        </div>
                    </div>
                </Card>
            )}
        </>
    )
}

MoreMembersCard.prototype = {
    member: PropTypes.object.isRequired,
    loading: PropTypes.bool
}

export default MoreMembersCard
