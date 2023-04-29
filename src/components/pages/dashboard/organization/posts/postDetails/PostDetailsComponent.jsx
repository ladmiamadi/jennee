import React, { useState } from 'react'

import { Box } from '@mui/material'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import HeaderDetailsPageContent from '@common/headerPageContent/HeaderDetailsPageContent'
import PostDetailsCard from '@components/pages/dashboard/organization/posts/postsCard/PostDetailsCard'
import PostDetailsContent from '@components/pages/dashboard/organization/posts/postDetails/postDetailsContent/PostDetailsContent'
import PropTypes from 'prop-types'
import { ROUTES } from '@constants/routesConst'
import { BackSlashRoute } from '@utils/BackSlashRoute'

/**
 *
 * @param handleOpen {function} - The function to be executed when click on edit post
 * @param post {object} - The prop post to be displayed
 * @returns {JSX.Element} - the MemberDetailsComponent  component
 * @constructor
 */
const PostDetailsComponent = ({ handleOpen, post }) => {
    const [editPost, setEditPost] = useState(false)
    return (
        <Box sx={{ marginBottom: '64px' }}>
            <HeaderDetailsPageContent
                btnName={editPost ? 'Modifier' : 'Modifier le Post'}
                backLink={BackSlashRoute([
                    ROUTES.DASHBOARD.ROOT.PATH,
                    ROUTES.DASHBOARD.ORGANIZATION.PATH,
                    ROUTES.DASHBOARD.ORGANIZATION.CHILDREN.POSTS.PATH
                ])}
                handleClick={handleOpen}
                dangerBtnName={'Supprimer'}
                setEditContent={setEditPost}
                editContent={editPost}
            />
            <Box sx={{ marginTop: '35px' }}>
                <Grid container>
                    <Grid item xs={3.5}>
                        <PostDetailsCard loading={false} picture={post.picture} name={post.name} status={post.status} editPost={editPost} />
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={8}>
                        <PostDetailsContent post={post} editPost={editPost} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

PostDetailsComponent.propTypes = {
    post: PropTypes.object.isRequired,
    handleOpen: PropTypes.func
}
export default PostDetailsComponent
