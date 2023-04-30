import React from 'react'
import { Box, Card, CardMedia, Skeleton, Typography } from '@mui/material'
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded'
import PropTypes from 'prop-types'

/**
 * @param {{id: number, name: string, picture: string, info: string, status: string}} post
 * @param {boolean} loading data loading status
 * @returns {JSX.Element} The PostCard component
 */
const PostCard = ({ post, loading }) => {
    return (
        <>
            {loading ? (
                <Box sx={{ pt: 0.5 }}>
                    <Skeleton variant="rounded" width={332} height={368} animation={'wave'} />
                    <Skeleton animation={'wave'} />
                    <Skeleton width="60%" animation={'wave'} />
                </Box>
            ) : (
                <Card className="posts__card">
                    <CardMedia image={post.picture} title={post.name} className={'posts__card__picture'} component="img" alt="post" />
                    <div className={'posts__card__content'}>
                        <div className={'posts__card__content__title'}>
                            <Typography gutterBottom variant="h6" component="div" className={'posts__card__content__name'}>
                                {post.name}
                            </Typography>
                            <Typography variant="caption" gutterBottom className={'posts__card__content__title__info'}>
                                {post.info}
                            </Typography>
                        </div>

                        <div className={'posts__card__content__status'}>
                            <Brightness1RoundedIcon
                                color={post.status === 'En ligne' ? 'success' : 'secondary'}
                                fontSize={'small'}
                                className={'posts__card__content__icon'}
                            />
                            <Typography variant="caption" gutterBottom className={'posts__card__content__status__caption'}>
                                {post.status}
                            </Typography>
                        </div>
                    </div>
                </Card>
            )}
        </>
    )
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
    loading: PropTypes.bool
}
export default PostCard
