import type { Basket } from "../../models/basket";

const BASE_URL = "https://localhost:7020/api/basket";

const defaultOptions: RequestInit = {
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include", // Send/receive cookies
};

// type AddItemParams = {
//   productId: number;
//   quantity: number;
// };

// --- API Methods ---

// GET /api/basket
export async function getBasket(): Promise<Basket | null> {
  const res = await fetch(BASE_URL, {
    ...defaultOptions,
    method: "GET",
  });

  if (res.status === 204) return null; // No basket exists

  if (!res.ok) throw new Error("Failed to fetch basket");
  return await res.json();
}

export async function addItemToBasket({
  productId,
  quantity,
}: {
  productId: number;
  quantity: number;
}) {
  const response = await fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ productId, quantity }),
  });

  if (!response.ok) {
    const errorText = await response.text(); // This handles empty body
    console.error("Backend error response:", errorText);
    throw new Error("Failed to add item to basket");
  }

  try {
    return await response.json();
  } catch {
    throw new Error("Invalid JSON response from server");
  }
}

// PUT /api/basket/items
export async function updateItemQuantity(item: {
  productId: number;
  quantity: number;
}): Promise<Basket> {
  const res = await fetch(`${BASE_URL}/items`, {
    ...defaultOptions,
    method: "PUT",
    body: JSON.stringify(item),
  });

  if (!res.ok) throw new Error("Failed to update item quantity");
  return await res.json();
}

// DELETE /api/basket/items/:id
export async function removeItemFromBasket(itemId: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/items/${itemId}`, {
    ...defaultOptions,
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to remove item");
}

// POST /api/basket/clear
export async function clearBasket(): Promise<void> {
  const res = await fetch(`${BASE_URL}/clear`, {
    ...defaultOptions,
    method: "POST",
  });

  if (!res.ok) throw new Error("Failed to clear basket");
}

// POST /api/basket/checkout
export async function checkout(): Promise<string> {
  const res = await fetch(`${BASE_URL}/checkout`, {
    ...defaultOptions,
    method: "POST",
  });

  if (!res.ok) throw new Error("Checkout failed");
  return await res.text();
}
