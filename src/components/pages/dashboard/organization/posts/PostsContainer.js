import React, { useState } from 'react'
import PostsComponent from '@components/pages/dashboard/organization/posts/PostsComponent'
import { createTheme, ThemeProvider } from '@mui/material'

const PostsContainer = () => {
    const [loading, setLoading] = useState(true)

    const theme = createTheme({
        palette: {
            secondary: {
                main: '#E8E80C'
            }
        }
    })

    setTimeout(() => {
        setLoading(false)
    }, 2000)

    return (
        <ThemeProvider theme={theme}>
            <PostsComponent loading={loading} />
        </ThemeProvider>
    )
}

export default PostsContainer
