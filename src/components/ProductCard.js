import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";

export default function ProductCard(props) {
  const { product } = props;
  const dispatch = useDispatch();

  return (
    <Card
      variant="outlined"
      sx={{
        p: 1,
        border: "1px solid #dbdbdb",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        image={product.image}
      />
      <CardContent
        sx={{
          mt: 1,
          borderTop: "1px solid #dbdbdb",
          flex: 1,
        }}
      >
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
          {product.description.slice(0, 100)}...
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ ml: 1 }}
          variant="subtitle2"
          gutterBottom
          component="h6"
        >
          ₦{product.price}
        </Typography>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={() => dispatch(addItem(product))}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
