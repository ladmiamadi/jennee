import React from 'react'

import { useLocation } from 'react-router-dom'
import PostDetailsComponent from '@components/pages/dashboard/organization/posts/postDetails/PostDetailsComponent'

const PostDetailsContainer = () => {
    const location = useLocation()
    const post = location.state?.data

    return <PostDetailsComponent post={post} />
}

export default PostDetailsContainer
