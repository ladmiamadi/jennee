import React from 'react'

import { Box, Card, CardMedia, Divider, Skeleton, Typography } from '@mui/material'
import Button from '@common/button/Button'
import PropTypes from 'prop-types'
import MemberStatusRoundedIcon from '@common/roundedIcon/MemberStatusRoundedIcon'

/**
 *
 * @param picture {string} - The path to the member picture
 * @param name {string} - The name of the member
 * @param status {string} - The status of the member if he is online or not
 * @param role {string} - The role of the member
 * @param loading {boolean} - The status of loading data
 * @param editMember {boolean} -The prop to display edit form
 * @returns {JSX.Element} - The PostDetailsCard component
 * @constructor
 */
const MemberDetailsCard = ({ picture, name, status, role, loading, editMember }) => {
    return (
        <>
            {loading ? (
                <Box sx={{ pt: 0.5 }}>
                    <Skeleton variant="rounded" width={362} height={398} animation={'wave'} />
                    <Skeleton animation={'wave'} />
                    <Skeleton width="60%" animation={'wave'} />
                </Box>
            ) : (
                <Card className="member__details__card">
                    <CardMedia
                        image={picture}
                        title={name}
                        component="img"
                        alt="member"
                        className={editMember ? 'member__details__card__image--edit' : ''}
                    />
                    {editMember ? (
                        <div className={'member__details__card--edit'}>
                            <Button name={'Modifier les contenus visuels'} className={'member__details__card--edit--visual'}></Button>
                            <Divider component={'hr'} />
                            <Button name={'Compte administrateur'} className={'member__details__card--edit--informations'}></Button>
                        </div>
                    ) : (
                        <div className={'member__details__card__content'}>
                            <div className={'member__details__card__content__title'}>
                                <Typography gutterBottom variant="h6" component="div" className={'member-details-card__content__name'}>
                                    {name}
                                </Typography>
                            </div>
                            <div className={'member__details__card__content__status'}>
                                <MemberStatusRoundedIcon status={status} className={'member__details__card__content__icon'} />
                                <Typography variant="caption" gutterBottom className={'member__details__card__content__status__caption'}>
                                    {status}
                                </Typography>
                                <Typography variant="caption" gutterBottom className={'member__details__card__content__status__role'}>
                                    {role}
                                </Typography>
                            </div>
                        </div>
                    )}
                </Card>
            )}
        </>
    )
}

MemberDetailsCard.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    editMember: PropTypes.bool
}

export default MemberDetailsCard
