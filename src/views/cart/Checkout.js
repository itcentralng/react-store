import Layout from "../layouts/Layout";
import { Button, ButtonGroup, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container } from "@mui/system";
import { useState } from "react";

export default function Checkout(){
    const [checkOutFrom,setCheckOutFrom] = useState({
        fname:'',
        lname:'',
        address:'',
        city:'',
        state:'',
        zip:'',
        email:'',
        phoneNo:''
    });

    const handleFromData = (e) => {
        let name = e.target.name;
        setCheckOutFrom((state) => {
            return {
                ...state,
                [name] : e.target.value
            }
        });

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log({checkOutFrom});
    }

    return (
        <Layout>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Box sx={{mt:5,mx:'auto'}}>
                        <h4>Shopping Information</h4>
                        <Grid container spacing={2} >
                            <Grid item xs={4}>
                                <TextField fullWidth onChange={handleFromData} name="fname" label="First name" variant="outlined" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField fullWidth  onChange={handleFromData} name="lname" label="Last name" variant="outlined" />
                            </Grid>
                        </Grid>
                        <br/>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <TextField fullWidth  onChange={handleFromData} name="address" label="Address" variant="outlined" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField fullWidth  onChange={handleFromData} name="city" label="City" variant="outlined" />
                            </Grid>
                        </Grid>
                        <br/>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <TextField fullWidth  onChange={handleFromData} name="state" label="State" variant="outlined" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField fullWidth onChange={handleFromData} name="zip" type="number"  label="ZIP" variant="outlined" />
                            </Grid>
                        </Grid>
                        <h4>Contact Information</h4>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <TextField fullWidth onChange={handleFromData} name="email" type="email" label="Email" variant="outlined" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField fullWidth onChange={handleFromData} name="phoneNo" type="number"  label="Phone No" variant="outlined" />
                            </Grid>
                        </Grid>
                        <Box sx={{ mt:4 }}>
                            <Button type="submit" sx={{ px:5 }} variant="contained" color="success">Make Payment</Button>
                        </Box>


                    </Box>
                </form>
            </Container>
        </Layout>
    );
}