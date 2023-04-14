import React from 'react'

import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { ROUTES } from '@constants/routesConst'
import { POSTS_LIST } from '../../../../../fixtures/postsList'
import PostCard from '@components/pages/dashboard/organization/posts/postsCard/PostCard'
import PropTypes from 'prop-types'
import { FILTER_DROPDOWN_LIST_POST } from '@constants/filterDropDownList'
import Dropdown from '@shared/dropdown/Dropdown'
import Grid from '@mui/material/Unstable_Grid2'

/**
 The component for posts page
 * @param {boolean} loading data loading status
 * @typedef {{id: number, name: string, picture: string, info: string, status: string}} Post
 * @param {Post} post
 * @returns {JSX.Element} PostsComponent
 */
const PostsComponent = ({ loading }) => {
    return (
        <Box sx={{ marginBottom: '64px' }}>
            <Grid container spacing={6} sx={{ marginTop: '16px' }}>
                {POSTS_LIST.map((post) => (
                    <Grid key={post.id} xs={'auto'}>
                        <Link to={ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.POSTS.CHILDREN.POSTS_DETAILS.PATH}>
                            <PostCard post={post} key={post.id} loading={loading} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
            <Dropdown filterList={FILTER_DROPDOWN_LIST_POST} />
        </Box>
    )
}

PostsComponent.prototype = {
    loading: PropTypes.bool
}

export default PostsComponent
