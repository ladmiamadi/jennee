import React from 'react'
import PostDetailsContentDescription from '@components/pages/dashboard/organization/posts/postDetails/postDetailsContent/PostDetailsContentDescription'
import PostDetailsContentComments from '@components/pages/dashboard/organization/posts/postDetails/postDetailsContent/PostDetailsContentComments'
import { Box } from '@mui/material'

const PostDetailsContent = ({ post }) => {
    return (
        <Box className={'post__details'}>
            <PostDetailsContentDescription post={post} />
            <PostDetailsContentComments comment={post.comment} />
        </Box>
    )
}

export default PostDetailsContent
