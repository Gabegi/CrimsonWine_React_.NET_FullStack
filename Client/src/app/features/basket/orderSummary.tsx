// OrderSummary.tsx (in /shared/components or similar)
import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import { useBasket } from "./BasketContext";

export default function OrderSummary() {
  const { basket } = useBasket();

  // Calculate subtotal
  const subtotal =
    basket?.items.reduce((sum, item) => sum + item.price * item.quantity, 0) ??
    0;
  // For now, total is same as subtotal (no tax/shipping)
  const total = subtotal;

  return (
    <Card elevation={0} sx={{ background: "none", boxShadow: "none" }}>
      <CardContent>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Order Summary
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography color="text.secondary">Subtotal</Typography>
          <Typography>${subtotal.toFixed(2)}</Typography>
        </Box>
        {/* Add more rows here for tax/shipping if needed */}
        <Divider sx={{ my: 1 }} />
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography fontWeight={600}>Total</Typography>
          <Typography fontWeight={600}>${total.toFixed(2)}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
