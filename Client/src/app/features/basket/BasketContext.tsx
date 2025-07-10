import React, { createContext, useContext, useState, useCallback } from "react";
import type { Basket, BasketContextType } from "../../models/basket";
import { getBasket } from "./basketAPI";

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [basket, setBasket] = useState<Basket | null>(null);

  const refreshBasket = useCallback(async () => {
    try {
      const data = await getBasket();
      setBasket(data);
    } catch {
      setBasket(null);
    }
  }, []);

  return (
    <BasketContext.Provider value={{ basket, setBasket, refreshBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export function useBasket() {
  const context = useContext(BasketContext);
  if (!context)
    throw new Error("useBasket must be used within a BasketProvider");
  return context;
}
