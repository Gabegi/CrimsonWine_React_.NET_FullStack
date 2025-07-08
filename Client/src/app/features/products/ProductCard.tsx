import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { Product } from "../../models/product";
import { addItemToBasket } from "../basket/basketAPI";

interface Props {
  product: Product;
  onBasketUpdate?: () => void; // Optional callback to refresh basket elsewhere
}

export default function ProductCard({ product, onBasketUpdate }: Props) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      await addItemToBasket({
        productId: product.id,
        quantity: 1,
      });
      onBasketUpdate?.(); // Notify parent component to refresh basket
      // You could also show a success message here
    } catch (error) {
      console.error("Failed to add item to basket:", error);
      // You could show an error message here
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#f5f5f5",
        }}
      >
        <CardMedia
          component="img"
          image={product.pictureUrl}
          alt={product.name}
          sx={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.description}
        </Typography>
        <Typography sx={{ mt: 1 }} fontWeight="bold">
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={handleAddToCart} disabled={isAdding}>
          {isAdding ? "Adding..." : "Add to Cart"}
        </Button>
        <Button component={Link} to={`/catalog/${product.id}`}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
