import React from 'react'
import { Outlet } from 'react-router-dom'
// project import
import Header from './header'
import { Box } from '@mui/material'

const MainLayout = () => {
    return (
        <Box sx={{ height: '100%' }}>
            <Header />
            <Outlet />
        </Box>
    )
}

export default MainLayout
