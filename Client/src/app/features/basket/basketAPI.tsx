import type { Basket } from "../../models/basket";

const BASE_URL = "https://localhost:7020/api/basket";

const defaultOptions: RequestInit = {
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include", // Send/receive cookies
};

type AddItemParams = {
  productId: number;
  quantity: number;
};

// --- API Methods ---

// GET /api/basket
export async function getBasket(): Promise<Basket> {
  const res = await fetch(BASE_URL, {
    ...defaultOptions,
    method: "GET",
  });

  if (!res.ok) throw new Error("Failed to fetch basket");
  return await res.json();
}

// POST /api/basket/items
export async function addItemToBasket(productId: number, quantity: number = 1) {
  const response = await fetch("/api/basket/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId, quantity }),
  });

  if (!response.ok) {
    const errorText = await response.text(); // <-- important: response might not have JSON
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  const basket: Basket = await response.json();
  return basket;
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
