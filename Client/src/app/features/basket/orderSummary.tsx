// OrderSummary.tsx (in /shared/components or similar)
import { Card, CardContent, Typography } from "@mui/material";

export default function OrderSummary() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Order Summary</Typography>
        {/* Implement subtotal, total, etc. later */}
      </CardContent>
    </Card>
  );
}
