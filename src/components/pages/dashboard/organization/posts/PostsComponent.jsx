import React from 'react'

import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { POSTS_LIST } from '../../../../../fixtures/postsList'
import PostCard from '@components/pages/dashboard/organization/posts/postsCard/PostCard'
import PropTypes from 'prop-types'
import { FILTER_DROPDOWN_LIST_POST } from '@constants/filterDropDownList'
import Dropdown from '@shared/dropdown/Dropdown'
import Grid from '@mui/material/Unstable_Grid2'
import { ROUTES } from '@constants/routesConst'

/**
 The component for posts page
 * @param {boolean} loading data loading status
 * @typedef {{id: number, name: string, picture: string, info: string, status: string, description: string ,comment: number, like: number, share:number, reaction: number}} Post
 * @param {Post} post
 * @returns {JSX.Element} PostsComponent
 */
const PostsComponent = ({ loading }) => {
    return (
        <Box sx={{ marginBottom: '64px' }}>
            <Grid
                container
                rowSpacing={6}
                columns={{ xs: 6, sm: 12, md: 13, lg: 24 }}
                columnSpacing={{ xs: 3, sm: 12 }}
                sx={{ marginTop: '16px', justifyContent: 'center' }}>
                {POSTS_LIST.map((post) => (
                    <Grid key={post.id} xs={'auto'}>
                        <Link to={ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.POSTS.CHILDREN.POSTS_DETAILS.PATH} state={{ data: post }}>
                            <PostCard post={post} loading={loading} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
            <Dropdown filterList={FILTER_DROPDOWN_LIST_POST} />
        </Box>
    )
}

PostsComponent.propTypes = {
    loading: PropTypes.bool
}

export default PostsComponent
