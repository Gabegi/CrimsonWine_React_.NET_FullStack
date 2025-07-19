// BasketItem.tsx (in same folder as BasketPage)
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import type { Item } from "../../models/basket";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeItemFromBasket } from "./basketAPI";
import { useBasket } from "./BasketContext";

export default function BasketItem({ item }: { item: Item }) {
  const { refreshBasket } = useBasket();

  const handleRemove = async () => {
    try {
      await removeItemFromBasket(item.productId);
      await refreshBasket();
    } catch (error) {
      // Optionally handle error (e.g., show a toast)
      console.error("Failed to remove item:", error);
    }
  };

  return (
    <Card sx={{ mb: 2, boxShadow: 0, border: "none", background: "none" }}>
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2, p: 1 }}>
        <Avatar
          src={item.pictureUrl}
          alt={item.name}
          variant="rounded"
          sx={{ width: 56, height: 56, mr: 2, borderRadius: 2, boxShadow: 1 }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography fontWeight={600}>{item.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            Quantity: {item.quantity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: ${item.price}
          </Typography>
        </Box>
        <IconButton
          aria-label="Remove item"
          onClick={handleRemove}
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}
