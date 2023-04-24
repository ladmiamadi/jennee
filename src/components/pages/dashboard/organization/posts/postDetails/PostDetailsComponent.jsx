import React, { useState } from 'react'

import { Box } from '@mui/material'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import HeaderPostDetailsContent from '@common/headerPageContent/HeaderPostDetailsContent'
import PostDetailsCard from '@components/pages/dashboard/organization/posts/postsCard/PostDetailsCard'
import PostDetailsContent from '@components/pages/dashboard/organization/posts/postDetails/postDetailsContent/PostDetailsContent'
import PropTypes from 'prop-types'

/**
 *
 * @param handleOpen {function} - The function to be executed when click on edit post
 * @param post {object} - The prop post to be displayed
 * @returns {JSX.Element} - the PostDetailsComponent  component
 * @constructor
 */
const PostDetailsComponent = ({ handleOpen, post }) => {
    const [editPost, setEditPost] = useState(false)

    return (
        <Box sx={{ marginBottom: '64px' }}>
            <HeaderPostDetailsContent
                btnName={editPost ? 'Modifier' : 'Modifier le Post'}
                link={'/dashboard/organization'}
                handleClick={handleOpen}
                setEditPost={setEditPost}
                editPost={editPost}
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

PostDetailsComponent.prototype = {
    post: PropTypes.object.isRequired,
    handleOpen: PropTypes.func
}
export default PostDetailsComponent
