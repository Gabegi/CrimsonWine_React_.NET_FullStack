import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import type { Basket } from "../../models/basket";
import { getBasket } from "./basketAPI";
import BasketItem from "./basketItem";
import OrderSummary from "./orderSummary";

export default function BasketPage() {
  const [basket, setBasket] = useState<Basket | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBasket()
      .then(setBasket)
      .catch((error) => console.error("Failed to load basket:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Typography>Loading basket...</Typography>;

  if (!basket || basket.items.length === 0)
    return <Typography variant="h3">Your basket is empty</Typography>;

  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <Box sx={{ flex: 2, minWidth: "300px" }}>
        {basket.items.map((item) => (
          <BasketItem item={item} key={item.productId} />
        ))}
      </Box>
      <Box sx={{ flex: 1, minWidth: "250px" }}>
        <OrderSummary />
      </Box>
    </Box>
  );
}
