import React, { useState } from 'react'
import PostDetailsContentDescription from '@components/pages/dashboard/organization/posts/postDetails/postDetailsContent/PostDetailsContentDescription'
import PostDetailsContentComments from '@components/pages/dashboard/organization/posts/postDetails/postDetailsContent/PostDetailsContentComments'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'

/**
 *
 * @param post {object} - the Post which is displayed
 * @param editPost {boolean} - the prop to enable editing post
 * @returns {JSX.Element} - The MemberDetailsContent component
 * @constructor
 */
const PostDetailsContent = ({ post, editPost }) => {
    return (
        <Box className={'post__details'}>
            <PostDetailsContentDescription post={post} editPost={editPost} />
            <PostDetailsContentComments comment={post.comment} editPost={editPost} />
        </Box>
    )
}

PostDetailsContent.propTypes = {
    post: PropTypes.object.isRequired,
    editPost: PropTypes.bool
}

export default PostDetailsContent
