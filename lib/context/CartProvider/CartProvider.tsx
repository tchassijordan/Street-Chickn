import { remove } from 'lodash';
import { createContext, useContext, useState } from 'react';
import { DEFAULT_CURRENCY } from '../../constants';
import { TCartContextProps, TCartData, TCartContextType } from '.';

export const CartContext = createContext<TCartContextType>({
  data: [],
  addItemToCart: (data: TCartData) => {},
  clearCart: () => {},
  removeItem: (itemId: string) => {},
  isCartOpen: false,
  toggleCart: (isCartOpen?: boolean) => {},
  currency: 'XAF'
});

export default function CartProvider({ children }: TCartContextProps) {
  const [data, setData] = useState<TCartData[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = (isOpen?: boolean) => setIsCartOpen(isOpen ?? !isCartOpen);

  const removeItem = (itemId: string) => {
    const newData = remove(data, (data) => data.id !== itemId);
    setData(newData);
  };

  const addItemToCart = (itemData: TCartData) => {
    const isItemInCart = !!data.find((data) => data.id === itemData.id);

    if (!isItemInCart) {
      setData((data) => [...data, { ...itemData, quantity: 1 }]);
      return;
    }

    const newData = data.map(function incrementDuplicateQty(oldItemData) {
      if (oldItemData.id === itemData.id) {
        return {
          ...oldItemData,
          quantity: oldItemData.quantity + 1
        };
      }
      return oldItemData;
    });
    setData(newData);
  };

  const clearCart = () => setData([]);

  return (
    <CartContext.Provider
      value={{
        data,
        addItemToCart,
        removeItem,
        isCartOpen,
        toggleCart,
        currency: DEFAULT_CURRENCY,
        clearCart
      }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = (): TCartContextType | Error => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
