import { createContext, useContext, useState } from "react";

type ShopCaretProviderType = {
  children: React.ReactNode;
};

type CartItemType = {
  id: number;
  qyt: number;
};
type ShopCaretContextType = {
  cartItems: CartItemType[];
};

export const ShopCaretContext = createContext({} as ShopCaretContextType);

export function useShopCaretContext() {
  return useContext(ShopCaretContext);
}

export default function ShopCaretContextProvider({
  children,
}: ShopCaretProviderType) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  return (
    <ShopCaretContext.Provider value={{ cartItems }}>
      {children}
    </ShopCaretContext.Provider>
  );
}
