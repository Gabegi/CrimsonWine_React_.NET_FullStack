import type { Basket } from "../../models/basket";

const BASE_URL = "https://localhost:7020/api/basket";

const getBasketId = () => localStorage.getItem("basketId");

const setBasketId = (basketId: string) =>
  localStorage.setItem("basketId", basketId);

// type AddItemParams = {
//   productId: number;
//   quantity: number;
// };

// --- API Methods ---

// GET /api/basket
export async function getBasket(): Promise<Basket | null> {
  console.log("getBasket: Making request to", BASE_URL);
  const basketId = getBasketId();
  console.log("getBasket: Basket ID from localStorage:", basketId);

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (basketId) {
    headers["X-Basket-Id"] = basketId;
  }

  const res = await fetch(BASE_URL, {
    headers,
    credentials: "include",
    method: "GET",
  });

  console.log("getBasket: Response status:", res.status);
  console.log(
    "getBasket: Response headers:",
    Object.fromEntries(res.headers.entries())
  );

  if (res.status === 204) {
    console.log("getBasket: No basket exists (204)");
    return null;
  }

  if (!res.ok) {
    console.error("getBasket: Request failed with status", res.status);
    throw new Error("Failed to fetch basket");
  }

  const data = await res.json();
  console.log("getBasket: Received basket data:", data);
  return data;
}

export async function addItemToBasket({
  productId,
  quantity,
}: {
  productId: number;
  quantity: number;
}) {
  console.log("addItemToBasket: Making request to", `${BASE_URL}/items`);
  const basketId = getBasketId();
  console.log("addItemToBasket: Basket ID from localStorage:", basketId);

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (basketId) {
    headers["X-Basket-Id"] = basketId;
  }

  const response = await fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers,
    credentials: "include",
    body: JSON.stringify({ productId, quantity }),
  });

  console.log("addItemToBasket: Response status:", response.status);
  console.log(
    "addItemToBasket: Response headers:",
    Object.fromEntries(response.headers.entries())
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Backend error response:", errorText);
    throw new Error("Failed to add item to basket");
  }

  try {
    const data = await response.json();
    console.log("addItemToBasket: Received response data:", data);

    // Store the basket ID if it's in the response
    if (data.basketId) {
      setBasketId(data.basketId);
      console.log(
        "addItemToBasket: Stored basket ID in localStorage:",
        data.basketId
      );
    }

    return data;
  } catch {
    throw new Error("Invalid JSON response from server");
  }
}

// PUT /api/basket/items
export async function updateItemQuantity(item: {
  productId: number;
  quantity: number;
}): Promise<Basket> {
  console.log("updateItemQuantity: Making request to", `${BASE_URL}/items`);
  const basketId = getBasketId();
  console.log("updateItemQuantity: Basket ID from localStorage:", basketId);

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (basketId) {
    headers["X-Basket-Id"] = basketId;
  }

  const res = await fetch(`${BASE_URL}/items`, {
    method: "PUT",
    headers,
    credentials: "include",
    body: JSON.stringify(item),
  });

  console.log("updateItemQuantity: Response status:", res.status);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Backend error response:", errorText);
    throw new Error("Failed to update item quantity");
  }

  return await res.json();
}

// DELETE /api/basket/items/:productId
export async function removeItemFromBasket(productId: number): Promise<void> {
  console.log(
    "removeItemFromBasket: Making request to",
    `${BASE_URL}/items/${productId}`
  );
  const basketId = getBasketId();
  console.log("removeItemFromBasket: Basket ID from localStorage:", basketId);

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (basketId) {
    headers["X-Basket-Id"] = basketId;
  }

  const res = await fetch(`${BASE_URL}/items/${productId}`, {
    method: "DELETE",
    headers,
    credentials: "include",
  });

  console.log("removeItemFromBasket: Response status:", res.status);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Backend error response:", errorText);
    throw new Error("Failed to remove item");
  }
}

// POST /api/basket/clear
export async function clearBasket(): Promise<void> {
  console.log("clearBasket: Making request to", `${BASE_URL}/clear`);
  const basketId = getBasketId();
  console.log("clearBasket: Basket ID from localStorage:", basketId);

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (basketId) {
    headers["X-Basket-Id"] = basketId;
  }

  const res = await fetch(`${BASE_URL}/clear`, {
    method: "POST",
    headers,
    credentials: "include",
  });

  console.log("clearBasket: Response status:", res.status);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Backend error response:", errorText);
    throw new Error("Failed to clear basket");
  }
}

// POST /api/basket/checkout
export async function checkout(): Promise<string> {
  console.log("checkout: Making request to", `${BASE_URL}/checkout`);
  const basketId = getBasketId();
  console.log("checkout: Basket ID from localStorage:", basketId);

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (basketId) {
    headers["X-Basket-Id"] = basketId;
  }

  const res = await fetch(`${BASE_URL}/checkout`, {
    method: "POST",
    headers,
    credentials: "include",
  });

  console.log("checkout: Response status:", res.status);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Backend error response:", errorText);
    throw new Error("Checkout failed");
  }

  return await res.text();
}
