import React from 'react'

import { Box, Card, CardMedia, Divider, Skeleton, Typography } from '@mui/material'
import PostStatusRoundedIcon from '@common/roundedIcon/PostStatusRoundedIcon'
import Button from '@common/button/Button'
import PropTypes from 'prop-types'

/**
 *
 * @param picture {string} - The path to the post picture
 * @param name {string} - The title of the post
 * @param status {string} - The status of the post if It's published or not
 * @param loading {boolean} - The status of loading data
 * @param editPost {boolean} -The prop to display edit form
 * @returns {JSX.Element} - The PostDetailsCard component
 * @constructor
 */
const PostDetailsCard = ({ picture, name, status, loading, editPost }) => {
    return (
        <>
            {loading ? (
                <Box sx={{ pt: 0.5 }}>
                    <Skeleton variant="rounded" width={362} height={398} animation={'wave'} />
                    <Skeleton animation={'wave'} />
                    <Skeleton width="60%" animation={'wave'} />
                </Box>
            ) : (
                <Card className="posts__details__card">
                    <CardMedia
                        image={picture}
                        title={name}
                        component="img"
                        alt="post"
                        className={editPost ? 'posts__details__card__image--edit' : ''}
                    />
                    {editPost ? (
                        <div className={'posts__details__card--edit'}>
                            <Button name={'Modifier les contenus visuels'} className={'posts__details__card--edit--visual'}></Button>
                            <Divider component={'hr'} />
                            <Button name={'Informations générales'} className={'posts__details__card--edit--informations'}></Button>
                        </div>
                    ) : (
                        <div className={'posts__details__card__content'}>
                            <div className={'posts__details__card__content__title'}>
                                <Typography gutterBottom variant="h6" component="div" className={'posts-details-card__content__name'}>
                                    {name}
                                </Typography>
                            </div>
                            <div className={'posts__details__card__content__status'}>
                                <PostStatusRoundedIcon status={status} className={'posts__details__card__content__icon'} />
                                <Typography variant="caption" gutterBottom className={'posts__details__card__content__status__caption'}>
                                    {status}
                                </Typography>
                            </div>
                        </div>
                    )}
                </Card>
            )}
        </>
    )
}

PostDetailsCard.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    editPost: PropTypes.bool
}

export default PostDetailsCard
