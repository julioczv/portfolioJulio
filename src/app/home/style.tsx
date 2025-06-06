'use client'
import {styled, Link, Box, Typography, Button} from '@mui/material'


export const Content = styled(Box)(({theme}) => ({
    maxWidth: '1920px',
    minWidth: '800px',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    '& h5': {
        color: 'var(--cor-primaria)',
        fontWeight: '600',
    },
    overflowY: 'hidden',
}))

export const Spacebetween = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    height: '90vh',
    alignItems: 'center'
}))

export const HireMe = styled(Button)(({theme}) => ({
    color: 'white',
    backgroundColor: 'var(--cor-primaria)',
    borderRadius: '10px',
    textTransform: 'none',
    fontSize: '18px',
    width: '160px',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
        border: '2px solid #5A189A',
        backgroundColor: 'white',
        color: 'var(--cor-primaria)',

    },
}))

export const Relative = styled(Box)(({theme}) => ({
display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '600px',
    width: '600px',
    overflow: 'hidden',
    position: 'sticky',

}));

export const Spinborder = styled(Box)(({theme}) => ({
   width: '33rem',
    height: '33rem',
    border: '1px solid var(--cor-primaria)',
    borderRadius: '50%',
    position: 'relative',
    animation: "spin 10s linear infinite",
    "@keyframes spin": {
        "0%": {
            transform: "rotate(0deg)",
        },
        "100%": {
            transform: "rotate(360deg)",
        },
    },
}))


export const IconTop = styled(Box)(({theme}) => ({
    position: "absolute",
    top: 0,
    left: "50%",
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "45px",
    height: "45px",
    background: 'white',
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: '0 0 1em var(--cor-primaria)',
    '&:hover': {
        color: 'var(--cor-primaria)',
        cursor: 'pointer'
    }

}))

export const IconRight = styled(Box)(({theme}) => ({
    position: "absolute",
    top: "50%",
    right: 0,
    background: 'white',
    zIndex: 1,
    borderRadius: "50%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "45px",
    height: "45px",
    transform: "translate(50%, -50%)",
    boxShadow: '0 0 1em var(--cor-primaria)',
    '&:hover': {
        color: 'var(--cor-primaria)',
        cursor: 'pointer'
    }

}))

export const IconBottom = styled(Box)(({theme}) => ({
    position: "absolute",
    bottom: 0,
    left: "50%",
    zIndex: 999,
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    transform: "translate(-50%, 50%)",
    boxShadow: '0 0 1em var(--cor-primaria)',
    '&:hover': {
        color: 'var(--cor-primaria)',
        cursor: 'pointer'
    }
}))

export const IconLeft = styled(Box)(({theme}) => ({
    position: "absolute",
    top: "50%",
    left: 0,
    zIndex: 999,
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: '0 0 1em var(--cor-primaria)',
    '&:hover': {
        color: 'var(--cor-primaria)',
        cursor: 'pointer'
    }
}))

export const MyImage = styled(Box)(({theme}) => ({
    width: '28rem',
    height: '28rem',
    borderRadius: '50%',
    overflow: 'hidden',
    position: 'absolute',
}))

export const MyImageAboutMe = styled(Box)(({theme}) => ({
    width: '28rem',
    height: '28rem',
    borderRadius: '50%',
    overflow: 'hidden',
}))

export const AboutMe = styled(Box)(({theme}) => ({
    display: 'flex',
    gap: '7em',
    width: '100%',
    height: '90vh',
    alignItems: 'center',
}))

export const OrganizeCards = styled(Box)(({theme}) => ({
    display: "flex",
    gap: "24px",
    pt: "24px",
    flexWrap: "wrap",

}))




