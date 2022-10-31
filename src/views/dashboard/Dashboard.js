import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layouts/Layout";
import ProductCard from "../../components/ProductCard";
import { getItemsAsync } from "../../store/slices/productSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productItems);
  useEffect(() => {
    getProductItems();
  }, []);

  function getProductItems() {
    dispatch(getItemsAsync());
  }
  return (
    <Layout>
      {productList.length === 0 ? (
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress /> &nbsp;&nbsp;<strong>Loading...</strong>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {productList.map((product) => {
            return (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={product} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Layout>
  );
}
