import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { COMMENTS_LIST } from '../../../../../../../fixtures/commentsList'
import { ReactComponent as PostCommentAvatar } from '@assets/svg/post/post-comments-avatar.svg'
import CommentAccordion from '@common/accordion/CommentAccordion'
import PropTypes from 'prop-types'

/**
 * @param comment {object} - the comment object to be displayed with details
 * @param editPost {boolean} - the prop to enable editing post
 * @returns {JSX.Element} - The PostDetailsContentComments component
 * @constructor
 */
const PostDetailsContentComments = ({ comment, editPost }) => {
    return (
        <>
            <div className={'post__details__comment'}>
                <div className={'post__details__comment__title'}>
                    <Typography variant="h6" gutterBottom>
                        Commentaires
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        className={'post__details__comment__title--number'}
                        sx={{ marginLeft: '20px', opacity: '0.3' }}>
                        {comment}
                    </Typography>
                </div>
            </div>
            <Divider component={'hr'} />
            <Box sx={{ width: '100%', marginTop: '20px' }}>
                <div className={'post__details__comments'}>
                    {COMMENTS_LIST.map((comment, index) => {
                        return (
                            <div className={'post__details__comments__item'} key={index}>
                                <div className={'post__details__comments__item--avatar'}>
                                    <PostCommentAvatar />
                                </div>
                                <div className={'post__details__comments__item--user'}>{comment.user}</div>
                                <div className={'post__details__comments__item--point'}>.</div>
                                <div className={'post__details__comments__item--reply'}>{comment.replies.length} réponses</div>
                                <CommentAccordion comment={comment} editPost={editPost} />
                            </div>
                        )
                    })}
                </div>
            </Box>
        </>
    )
}

PostDetailsContentComments.prototype = {
    comment: PropTypes.object.isRequired,
    editPost: PropTypes.bool.isRequired
}
export default PostDetailsContentComments
