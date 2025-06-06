import { Typography } from "@mui/material";
import type { Product } from "../../models/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}
export default function ProductList({ products }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.5rem",
        padding: "1rem",
      }}
    >
      {products.length === 0 ? (
        <Typography variant="h6">No products found.</Typography>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
