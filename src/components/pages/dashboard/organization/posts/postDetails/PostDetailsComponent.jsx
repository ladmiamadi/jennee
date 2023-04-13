import React from 'react'

import { Box } from '@mui/material'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import HeaderPostDetailsContent from '@common/headerPageContent/HeaderPostDetailsContent'
import PostDetailsCard from '@components/pages/dashboard/organization/posts/postsCard/PostDetailsCard'

const PostDetailsComponent = ({ handleOpen, post }) => {
    return (
        <Box sx={{ marginBottom: '64px', marginTop: '64px' }}>
            <HeaderPostDetailsContent btnName={'Modifier le post'} link={'/dashboard/organization'} handleOpen={handleOpen} />
            <Box sx={{ marginTop: '64px' }}>
                <Grid container>
                    <Grid item xs={3.5}>
                        <PostDetailsCard loading={false} post={post} />
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={8}></Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default PostDetailsComponent
