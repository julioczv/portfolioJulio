'use client'

import { styled, Link, Box, Typography } from '@mui/material'


export const NavBar = styled(Box)(({ theme }) => ({
   width: '100%',
    display: 'flex',
    gap: '24px',
    justifyContent: 'end',
    alignItems: 'center',
    background: 'white',
    height: '80px',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 99,

    '& h6': {
        fontWeight: '400',
        '&:hover': {
          fontWeight: '700',
            cursor: 'pointer',
        }
    },
    '& button': {
        color: 'white',
        backgroundColor: 'var(--cor-primaria)',
        borderRadius: '10px',
        textTransform: 'none',
        fontSize: '18px',
        width: '160px',
        '&:hover': {
          border: '2px solid #5A189A',
            backgroundColor: 'white',
            color: 'var(--cor-primaria)',

        },
    }

}))

export const NavContent = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: '1920px',
    minWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    gap: '24px',
    justifyContent: 'flex-end',
    alignItems: 'center',
}));


