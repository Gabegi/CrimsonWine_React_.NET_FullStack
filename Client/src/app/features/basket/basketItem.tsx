// BasketItem.tsx (in same folder as BasketPage)
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import type { Item } from "../../models/basket";

export default function BasketItem({ item }: { item: Item }) {
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
      </CardContent>
    </Card>
  );
}
