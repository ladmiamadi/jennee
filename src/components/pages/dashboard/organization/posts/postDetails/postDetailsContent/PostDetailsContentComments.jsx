import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { COMMENTS_LIST } from '../../../../../../../fixtures/commentsList'
import { ReactComponent as PostCommentAvatar } from '@assets/svg/post/post-comments-avatar.svg'
import CommentAccordion from '@common/accordion/CommentAccordion'

const PostDetailsContentComments = ({ comment }) => {
    return (
        <>
            <div className={'post__details__comment'}>
                <div className={'post__details__comment--title'}>
                    <Typography variant="h6" gutterBottom>
                        Commentaires
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        className={'post__details__comment--title--number'}
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
                                <CommentAccordion comment={comment} />
                            </div>
                        )
                    })}
                </div>
            </Box>
        </>
    )
}

export default PostDetailsContentComments
