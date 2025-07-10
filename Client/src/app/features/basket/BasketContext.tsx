import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import type { Basket, BasketContextType } from "../../models/basket";
import { getBasket } from "./basketAPI";

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [basket, setBasket] = useState<Basket | null>(null);

  const refreshBasket = useCallback(async () => {
    try {
      console.log("Refreshing basket...");
      const data = await getBasket();
      console.log("Basket data received:", data);
      setBasket(data);
    } catch (error) {
      console.error("Error refreshing basket:", error);
      setBasket(null);
    }
  }, []);

  // Load basket on mount
  useEffect(() => {
    console.log("BasketProvider: Loading basket on mount");
    refreshBasket();
  }, [refreshBasket]);

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
