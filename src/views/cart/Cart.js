import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, ButtonGroup } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from "react-redux";
import { addItem,removeItem } from '../../store/slices/cartSlice';
import { Box } from "@mui/system";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function Cart(){
    const cartItems=useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const grandQuantity = () => {
        return cartItems.reduce((a,b) => a+ b.quantity,0);
    }

    const grandTotal = () => {
        return cartItems.reduce((a,b) => a+ b.totalPrice,0)?.toFixed(2);
    };

    return (
        <Layout>
            {
                cartItems.length > 0 ? (
                    <>
                    <Box sx={{ mt:2,display:'flex',justifyContent:'space-between',alignItems:'center' }}>
                        <h4>Your Cart has {cartItems.length} items</h4>
                        <Link to="/cart" style={{color:'white',textDecoration:'none'}}>
                            <Button variant="contained"  color="success" startIcon={<ShoppingCartCheckoutIcon />}>Checkout</Button>
                        </Link>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table  size="small" sx={{ minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>No</TableCell>
                                    <TableCell>Item</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Total Price</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                cartItems && cartItems.map((item,index)=>{
                                    return (
                                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{index+1}</TableCell>
                                            <TableCell>{item.title} </TableCell>
                                            <TableCell>{item.quantity}</TableCell>
                                            <TableCell>{item.price} $</TableCell>
                                            <TableCell>{item.totalPrice} $</TableCell>
                                            <TableCell>
                                                <ButtonGroup>
                                                    <Button size="small"  color="success" onClick={() => dispatch(addItem(item))}><AddIcon/></Button>
                                                    <Button size="small"  color="success" onClick={() => dispatch(removeItem(item))}><RemoveIcon/></Button>
                                                </ButtonGroup>
                                            </TableCell>
                                        </TableRow>
                                    )
                                    })
                                }
                            
                            </TableBody>
                            <TableRow sx={{ borderTop: '1px solid #dbdbdb' }}>
                                <TableCell>Total</TableCell>
                                <TableCell></TableCell>
                                <TableCell component="th">{ grandQuantity() }</TableCell>
                                <TableCell></TableCell>
                                <TableCell component="th">{ grandTotal() } $</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>
                    </>
                ) : (
                    <Box sx={{ mt:2,display:'flex',justifyContent:'center',alignItems:'center' }}>
                        <h4>Your Cart is empty !</h4>
                    </Box>
                )
            }
        </Layout>
    );
}