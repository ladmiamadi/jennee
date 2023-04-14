import React from 'react'
import { Divider, Typography } from '@mui/material'

const PostDetailsContentComments = ({ comment }) => {
    return (
        <>
            <div className={'post-details-comment'}>
                <div className={'post-details-comment__title'}>
                    <Typography variant="h6" gutterBottom>
                        Commentaires
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        className={'post-details-comment__title__number'}
                        sx={{ marginLeft: '20px', opacity: '0.3' }}>
                        {comment}
                    </Typography>
                </div>
            </div>
            <Divider component={'hr'} />
        </>
    )
}

export default PostDetailsContentComments
