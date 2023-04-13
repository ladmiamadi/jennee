import React from 'react'

import { Box, Card, CardMedia, Skeleton, Typography } from '@mui/material'
import PostStatusRoundedIcon from '@common/roundedIcon/PostStatusRoundedIcon'

const PostDetailsCard = ({ post, loading }) => {
    return (
        <>
            {loading ? (
                <Box sx={{ pt: 0.5 }}>
                    <Skeleton variant="rounded" width={362} height={398} animation={'wave'} />
                    <Skeleton animation={'wave'} />
                    <Skeleton width="60%" animation={'wave'} />
                </Box>
            ) : (
                <Card className="posts-details-card">
                    <CardMedia image={post.picture} title={post.name} component="img" alt="post" />
                    <div className={'posts-details-card__content'}>
                        <div className={'posts-details-card__content__title'}>
                            <Typography gutterBottom variant="h6" component="div" className={'posts-details-card__content__name'}>
                                {post.name}
                            </Typography>
                        </div>
                        <div className={'posts-details-card__content__status'}>
                            <PostStatusRoundedIcon status={post.status} className={'posts-details-card__content__icon'} />
                            <Typography variant="caption" gutterBottom className={'posts-details-card__content__status__caption'}>
                                {post.status}
                            </Typography>
                        </div>
                    </div>
                </Card>
            )}
        </>
    )
}

export default PostDetailsCard
