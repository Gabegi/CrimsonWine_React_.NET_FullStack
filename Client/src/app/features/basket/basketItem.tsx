// BasketItem.tsx (in same folder as BasketPage)
import { Card, CardContent, Typography } from "@mui/material";

export default function BasketItem({ item }: { item: BasketItemType }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography>{item.productName}</Typography>
        <Typography>Quantity: {item.quantity}</Typography>
        <Typography>Price: ${item.price}</Typography>
      </CardContent>
    </Card>
  );
}
