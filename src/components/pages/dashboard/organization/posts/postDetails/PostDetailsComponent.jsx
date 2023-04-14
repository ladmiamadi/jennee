import React from 'react'

import { Box } from '@mui/material'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import HeaderPostDetailsContent from '@common/headerPageContent/HeaderPostDetailsContent'
import PostDetailsCard from '@components/pages/dashboard/organization/posts/postsCard/PostDetailsCard'
import PostDetailsContent from '@components/pages/dashboard/organization/posts/postDetails/postDetailsContent/PostDetailsContent'

const PostDetailsComponent = ({ handleOpen, post }) => {
    return (
        <Box sx={{ marginBottom: '64px' }}>
            <HeaderPostDetailsContent btnName={'Modifier le post'} link={'/dashboard/organization'} handleOpen={handleOpen} />
            <Box sx={{ marginTop: '35px' }}>
                <Grid container>
                    <Grid item xs={3.5}>
                        <PostDetailsCard loading={false} picture={post.picture} name={post.name} status={post.status} />
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={8}>
                        <PostDetailsContent post={post} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default PostDetailsComponent
