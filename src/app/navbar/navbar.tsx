'use client'


import React from 'react'
import {Box, Button, Typography, CssBaseline, createTheme, ThemeProvider} from '@mui/material';
import {NavBar, NavContent} from './style'


const theme = createTheme({
    typography: {
        fontFamily: 'Poppins',
    },
});

const Navbar = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
                <NavBar>
                    <NavContent>
                    <Typography variant='h6'>Home</Typography>
                    <Typography variant='h6'>About Me</Typography>
                    <Typography variant='h6'>Services</Typography>
                    <Typography variant='h6'>Projects</Typography>
                    <Typography variant='h6'>Contact</Typography>
                    <Button>Download CV</Button>
                </NavContent>
                </NavBar>
        </ThemeProvider>
    )
}

export default Navbar