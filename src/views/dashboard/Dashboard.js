import Layout from "../layouts/Layout";
import ProductCard from "../../components/ProductCard";
import { Grid } from "@mui/material";

export default function Dashboard(){
    return (
        <Layout>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard/>
                </Grid>
                
            </Grid>
        </Layout>
    );
}