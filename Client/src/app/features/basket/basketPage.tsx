import { Box, Typography } from "@mui/material";
import BasketItem from "./basketItem";
import OrderSummary from "./orderSummary";
import { useBasket } from "./BasketContext";
import { useEffect } from "react";

export default function BasketPage() {
  const { basket, refreshBasket } = useBasket();

  // Refresh basket on mount
  useEffect(() => {
    refreshBasket();
  }, [refreshBasket]);

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
