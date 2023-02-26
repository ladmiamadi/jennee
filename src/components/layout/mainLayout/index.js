import React from 'react'
import { Outlet } from 'react-router-dom'
// project import
import Footer from './footer'
import Header from './header'
import { Box } from '@mui/material'

const MainLayout = () => {
    return (
        <Box>
            <Header />
            <Outlet />
            <Footer />
        </Box>
    )
}

export default MainLayout
