import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const PostDetailsContentDescription = ({ post }) => {
    return (
        <div className={'post-details-description'}>
            <Typography variant="h6" gutterBottom>
                Description
            </Typography>
            <div className={'post-details-description__content'}>
                <div className={'post-details-description__content__text'}>
                    <Typography variant="body2" gutterBottom>
                        {post.description}
                    </Typography>
                </div>
                <Box sx={{ width: '40%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={'post-details-description__feedback'}>
                        <Grid item xs={6} className={'post-details-description__content__feedback__number'}>
                            <div>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Likes
                                </Typography>
                                {post.like}
                            </div>
                        </Grid>
                        <Grid item xs={6} className={'post-details-description__content__feedback__number'}>
                            <div>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Partages
                                </Typography>
                                {post.share}
                            </div>
                        </Grid>
                        <Grid item xs={6} className={'post-details-description__content__feedback__number'}>
                            <div>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Commentaires
                                </Typography>
                                {post.comment}
                            </div>
                        </Grid>
                        <Grid item xs={6} className={'post-details-description__content__feedback__reaction'}>
                            <div>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Réactions
                                </Typography>
                                <div>
                                    <AddIcon
                                        sx={{ fontSize: '15px' }}
                                        className={'post-details-description__content__feedback__reaction__plus'}
                                    />
                                    <AddIcon
                                        sx={{ fontSize: '15px' }}
                                        className={'post-details-description__content__feedback__reaction__plus'}
                                    />
                                    <AddIcon
                                        sx={{ fontSize: '15px' }}
                                        className={'post-details-description__content__feedback__reaction__plus'}
                                    />
                                </div>
                                <div className={'post-details-description__content__feedback__reaction__caption'}>{post.reaction}</div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default PostDetailsContentDescription
