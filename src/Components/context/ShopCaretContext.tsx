import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "./../hooks/useLocalStorage";
import { login } from "../../servers/server";
import { useNavigate } from "react-router-dom";

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
  handleRemvoeProductItem: (id: number) => void;
  cartQty: number;
  isLogin: boolean;
  handelLogin: (username: string, password: string) => void;
  handelLogOut: () => void;
};

export const ShopCaretContext = createContext({} as ShopCaretContextType);

export function useShopCaretContext() {
  return useContext(ShopCaretContext);
}

export default function ShopCaretContextProvider({
  children,
}: ShopCaretProviderType) {
  const [cartItems, setCartItems] = useLocalStorage<CartItemType[]>(
    "cartItems",
    [],
  );

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
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
          if (item.id === id) {
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
  const handleRemvoeProductItem = (id: number) => {
    setCartItems((currnteItem) => currnteItem.filter((item) => item.id !== id));
  };
  const cartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  const [isLogin, setIsLogin] = useState(() => {
    return !!localStorage.getItem("token");
  });
  const navigate = useNavigate();
  const handelLogin = (username: string, password: string) => {
    login(username, password).finally(() => {
      const token = "213DSFDFFgdfjaoij22";
      localStorage.setItem("token", token);
      setIsLogin(true);

      navigate("/");
    });
  };

  const handelLogOut = () => {
    setIsLogin(false);

    navigate("/login");
    localStorage.removeItem("token");
  };

  return (
    <ShopCaretContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemvoeProductItem,
        cartQty,
        isLogin,
        handelLogin,
        handelLogOut,
      }}
    >
      {children}
    </ShopCaretContext.Provider>
  );
}
