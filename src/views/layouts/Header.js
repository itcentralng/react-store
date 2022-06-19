import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';


export default function Header(){
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        React Store
                    </Typography>
                    <Button color="inherit" sx={{ mr:1 }} startIcon={<ShoppingCartIcon />}>Cart</Button>
                    <Button color="inherit" startIcon={<LogoutIcon />}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}