export type Basket = {
  basketId: string;
  items: Item[];
  clientSecret?: string;
  paymentIntentId?: string;
};

export type Item = {
  productId: number;
  name: string;
  price: number;
  pictureUrl: string;
  brand: string;
  type: string;
  quantity: number;
};

export type BasketContextType = {
  basket: Basket | null;
  setBasket: (basket: Basket | null) => void;
  refreshBasket: () => Promise<void>;
};
