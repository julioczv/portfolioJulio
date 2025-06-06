'use client'

import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/navbar/navbar";
import {CssBaseline, createTheme, ThemeProvider, styled, Box} from "@mui/material";


const theme = createTheme({
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
});


export const Root = styled(Box)(({theme}) => ({
    padding: '4em 6em',
    overflowX: 'hidden',
}))

export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html lang="en">
        <body>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Root>
                <Navbar/>
                {children}
            </Root>
        </ThemeProvider>
        </body>
        </html>
    );
}
