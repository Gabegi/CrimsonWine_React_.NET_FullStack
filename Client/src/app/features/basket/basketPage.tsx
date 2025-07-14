import {
  Box,
  Typography,
  Divider,
  Paper,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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

  if (!basket || basket.items.length === 0) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="60vh"
      >
        <ShoppingCartIcon sx={{ fontSize: 80, color: "grey.400", mb: 2 }} />
        <Typography variant="h4" color="text.secondary" gutterBottom>
          Your basket is empty
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Looks like you haven't added anything yet.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexWrap: { xs: "wrap", md: "nowrap" },
        mt: 4,
      }}
    >
      {/* Basket Items Section */}
      <Box sx={{ flex: 2, minWidth: "320px" }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Your Basket
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Stack spacing={2}>
            {basket.items.map((item) => (
              <Card
                key={item.productId}
                variant="outlined"
                sx={{ display: "flex", alignItems: "center", p: 1 }}
              >
                <CardContent sx={{ flex: 1, minWidth: 0 }}>
                  <BasketItem item={item} />
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Paper>
      </Box>
      {/* Order Summary Section */}
      <Box sx={{ flex: 1, minWidth: "260px" }}>
        <Paper elevation={4} sx={{ p: 3, position: { md: "sticky" }, top: 32 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Order Summary
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <OrderSummary />
        </Paper>
      </Box>
    </Box>
  );
}
