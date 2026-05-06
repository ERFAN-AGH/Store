import { createContext, useContext, useState } from "react";

type ShopCaretProviderType = {
  children: React.ReactNode;
};

type CartItemType = {
  id: number;
  qty: number;
};

type ShopCaretContextType = {
  cartItems: CartItemType[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
};

export const ShopCaretContext = createContext({} as ShopCaretContextType);

export function useShopCaretContext() {
  return useContext(ShopCaretContext);
}

export default function ShopCaretContextProvider({
  children,
}: ShopCaretProviderType) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return cartItems.map((item) => {
          if (item) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      const selectedItem = currentItem.find((item) => item.id === id);
      if (selectedItem?.qty === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) => {
          if (item) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };

  return (
    <ShopCaretContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
      }}
    >
      {children}
    </ShopCaretContext.Provider>
  );
}
