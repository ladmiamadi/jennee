import React from 'react'

import { useLocation } from 'react-router-dom'
import PostDetailsComponent from '@components/pages/dashboard/organization/posts/postDetails/PostDetailsComponent'

/**
 *
 * @returns {JSX.Element} - The postDetailsContainer component
 * @constructor
 */
const PostDetailsContainer = () => {
    const location = useLocation()
    const post = location.state?.data

    return <PostDetailsComponent post={post} />
}

export default PostDetailsContainer
