import React from 'react'
import { Outlet } from 'react-router-dom'
// project import
import Footer from './footer'
import Header from './header'
import { Box } from '@mui/material'
import Layout from '@layout/shape/Layout'
import Grid2 from '@mui/material/Unstable_Grid2' // Grid version 2
const AuthLayout = () => {
    return (
        /*sx={{ height: '100vh' }}*/
        <Box>
            <Header />
            <Grid2 container maxWidth={'lg'}>
                <Grid2 xs={6} md={6} lg={8}>
                    <Outlet />
                </Grid2>
                <Grid2 xs={6} md={6} lg={4}>
                    <Layout />
                </Grid2>
            </Grid2>
            <Footer />
        </Box>
    )
}

export default AuthLayout
