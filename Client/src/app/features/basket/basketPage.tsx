import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
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
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        {basket.items.map((item) => (
          <BasketItem item={item} key={item.productId} />
        ))}
      </Grid>
      <Grid xs={12} md={4}>
        <OrderSummary />
      </Grid>
    </Grid>
  );
}
