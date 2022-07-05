import Layout from "../layouts/Layout";
import { Button,  Grid, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
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
        phoneNo:'',
        payment:'1',
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
                            <Grid item xs={12} md={6} lg={4}>
                                <TextField fullWidth onChange={handleFromData} name="fname" label="First name" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <TextField fullWidth  onChange={handleFromData} name="lname" label="Last name" variant="outlined" />
                            </Grid>
                        </Grid>
                        <br/>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={4}>
                                <TextField fullWidth  onChange={handleFromData} name="address" label="Address" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <TextField fullWidth  onChange={handleFromData} name="city" label="City" variant="outlined" />
                            </Grid>
                        </Grid>
                        <br/>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={4}>
                                <TextField fullWidth  onChange={handleFromData} name="state" label="State" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <TextField fullWidth onChange={handleFromData} name="zip" type="number"  label="ZIP" variant="outlined" />
                            </Grid>
                        </Grid>
                        <h4>Contact Information</h4>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={4}>
                                <TextField fullWidth onChange={handleFromData} name="email" type="email" label="Email" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <TextField fullWidth onChange={handleFromData} name="phoneNo" type="number"  label="Phone No" variant="outlined" />
                            </Grid>
                        </Grid>
                        <h4>Payment Option</h4>
                        <ToggleButtonGroup
                            value={checkOutFrom.payment}
                            color="primary"
                            exclusive
                            onChange={handleFromData}
                        >
                            <ToggleButton name="payment" value="1" sx={{height:'50px',width:'200px'}}>Card</ToggleButton>
                            <ToggleButton name="payment" value="2" sx={{height:'50px',width:'200px'}}>Net Banking</ToggleButton>
                        </ToggleButtonGroup>
                        <Box sx={{ mt:4 }}>
                            <Button type="submit" sx={{ px:5 }} variant="contained" color="success">Make Payment</Button>
                        </Box>


                    </Box>
                </form>
            </Container>
        </Layout>
    );
}