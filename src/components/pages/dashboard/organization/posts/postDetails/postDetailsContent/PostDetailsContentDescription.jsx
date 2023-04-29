import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import TextArea from '@common/input/TextArea'
import PropTypes from 'prop-types'

/**
 *
 * @param post {Object} - The post to be displayed with details
 * @param editPost {boolean} - The prop to enable editing post form
 * @param handleTextareaChange {function}- The function to execute when textArea content is changed
 * @returns {JSX.Element} - The postDetailsContentDescription component
 * @constructor
 */
const PostDetailsContentDescription = ({ post, editPost, handleTextareaChange }) => {
    return (
        <div className={'post__details__description'}>
            <Typography variant="h6" gutterBottom>
                Description
            </Typography>
            <div className={'post__details__description__content'}>
                <div className={'post__details__description__content__text'}>
                    <TextArea
                        name={post.name}
                        className={''}
                        value={post.description}
                        onChange={handleTextareaChange}
                        required={false}
                        isDisabled={!editPost}
                        dataOnChange={null}
                    />
                </div>
                <Box sx={{ width: '40%' }}>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        className={'post__details__description--feedback'}>
                        <Grid item xs={6} className={'post__details__description__content--feedback--number'}>
                            <div>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Likes
                                </Typography>
                                {post.like}
                            </div>
                        </Grid>
                        <Grid item xs={6} className={'post__details__description__content--feedback--number'}>
                            <div>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Partages
                                </Typography>
                                {post.share}
                            </div>
                        </Grid>
                        <Grid item xs={6} className={'post__details__description__content--feedback--number'}>
                            <div>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Commentaires
                                </Typography>
                                {post.comment}
                            </div>
                        </Grid>
                        <Grid item xs={6} className={'post__details__description__content--feedback--reaction'}>
                            <div>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Réactions
                                </Typography>
                                <div>
                                    <AddIcon
                                        sx={{ fontSize: '15px' }}
                                        className={'post__details__description__content--feedback--reaction--plus'}
                                    />
                                    <AddIcon
                                        sx={{ fontSize: '15px' }}
                                        className={'post__details__description__content--feedback--reaction--plus'}
                                    />
                                    <AddIcon
                                        sx={{ fontSize: '15px' }}
                                        className={'post__details__description__content--feedback--reaction--pluss'}
                                    />
                                </div>
                                <div className={'post__details__description__content--feedback--reaction--caption'}>{post.reaction}</div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

PostDetailsContentDescription.propTypes = {
    post: PropTypes.object.isRequired,
    editPost: PropTypes.bool,
    handleTextareaChange: PropTypes.func
}

export default PostDetailsContentDescription
