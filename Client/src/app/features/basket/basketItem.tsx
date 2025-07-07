// BasketItem.tsx (in same folder as BasketPage)
import { Card, CardContent, Typography } from "@mui/material";
import type { Item } from "../../models/basket";

export default function BasketItem({ item }: { item: Item }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography>{item.name}</Typography>
        <Typography>Quantity: {item.quantity}</Typography>
        <Typography>Price: ${item.price}</Typography>
      </CardContent>
    </Card>
  );
}
