import React, { useState } from 'react'
import PostsComponent from '@components/pages/dashboard/organization/posts/PostsComponent'

const PostsContainer = () => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 2000)

    return <PostsComponent loading={loading} />
}

export default PostsContainer
