import { remove } from 'lodash';
import { createContext, useCallback, useContext, useState } from 'react';
import { DEFAULT_CURRENCY } from '../../constants';
import { TCartContextProps, TCartData, TCartContextType } from '.';

export const CartContext = createContext<TCartContextType>({
  data: [],
  addItemToCart: (data: TCartData) => {},
  clearCart: () => {},
  deleteItemFromCart: (itemId: string) => {},
  isCartOpen: false,
  toggleCart: () => {},
  currency: 'XAF',
  reduceItemQty: (itemId: string) => {}
});

export default function CartProvider({ children }: TCartContextProps) {
  const [data, setData] = useState<TCartData[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const deleteItemFromCart = useCallback(
    function (itemId: string) {
      const newData = remove(data, (data) => data.id !== itemId);
      setData(newData);
    },
    [data]
  );

  const addItemToCart = useCallback(
    function (itemData: TCartData) {
      const isItemInCart = !!data.find((data) => data.id == itemData.id);

      if (!isItemInCart) {
        const newData = data;
        newData.push({ ...itemData, quantity: 1 });
        setData(newData);
        return;
      }

      const newData = data.map(function incrementDuplicateQty(oldItemData) {
        if (oldItemData.id == itemData.id) {
          return {
            ...oldItemData,
            quantity: oldItemData.quantity + 1
          };
        }
        return oldItemData;
      });
      setData(newData);
    },
    [data]
  );

  const reduceItemQty = useCallback(
    function (itemId: string) {
      const itemIndex = data.findIndex(({ id }) => itemId == id);
      const currItemQty = data[itemIndex].quantity;

      if (currItemQty == 1) {
        deleteItemFromCart(itemId);
        return;
      }

      setData(
        data.map(function decrementQty(dataItem) {
          if (dataItem.id == itemId) {
            return {
              ...dataItem,
              quantity: currItemQty - 1
            };
          }
          return dataItem;
        })
      );
      return;
    },
    [data, deleteItemFromCart]
  );

  const clearCart = () => setData([]);

  return (
    <CartContext.Provider
      value={{
        data,
        addItemToCart,
        deleteItemFromCart,
        isCartOpen,
        toggleCart,
        currency: DEFAULT_CURRENCY,
        clearCart,
        reduceItemQty
      }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = (): TCartContextType => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
