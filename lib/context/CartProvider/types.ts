export type TCartContextProps = {
  children: React.ReactNode;
};

export type TCartData = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type TCartContextType = {
  data: TCartData[];
  addItemToCart: (itemData: TCartData) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  toggleCart: (isCartOpen?: boolean) => void;
  currency: string;
};
