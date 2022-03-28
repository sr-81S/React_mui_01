import React from 'react'
import {AppBar, Button, Toolbar, Typography,} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  return (
    <>
        <AppBar position = "fixed" sx={{shadowColor: '#fff'}}>
            <Toolbar>
                <Typography variant='h6' flexGrow={1}>
                    SERVER
                </Typography>
                <Button variant="text" color="inherit" startIcon={<LoginIcon/>}>
                    Login
                </Button>
                <Button variant="text" color="inherit" startIcon={<LogoutIcon/>}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    </>
  )
}   

export default Navbar