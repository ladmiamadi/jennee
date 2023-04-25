import React from 'react'
import { Outlet } from 'react-router-dom'
// project import
import Header from './header'
import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material'

const MainLayout = () => {
    const theme = createTheme({
        palette: {
            secondary: {
                main: '#E8E80C'
            },
            disconnected: {
                main: '#B4B4B4FF'
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ height: '100%' }}>
                <Header />
                <Outlet />
            </Box>
        </ThemeProvider>
    )
}

export default MainLayout
