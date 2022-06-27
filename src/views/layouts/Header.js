import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from "react-redux";
import { setUserLogout } from "../../store/slices/authSlice";

export default function Header(){
    const cartItems=useSelector(state => state.cart.cartItems).length;
    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch(setUserLogout());
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar sx={{ display:'flex',justifyContent:'space-between',alignItems:'center' }}>
                    <Link to="/" style={{color:'white',textDecoration:'none'}}>
                        <Typography variant="h6" component="div" >
                            React Store
                        </Typography>
                    </Link>
                    <Box>
                        <Link to="/cart" style={{color:'white',textDecoration:'none'}}>
                            <Button color="inherit" startIcon={
                                <>
                                    <Badge color="secondary" badgeContent={cartItems}>
                                        <ShoppingCartIcon />
                                    </Badge>
                                </>
                            }>
                            </Button>
                        </Link>
                        <Button onClick={handleLogout} color="inherit" startIcon={<LogoutIcon />}>Logout</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}