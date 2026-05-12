import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initValue: T) {
  const [value, setValue] = useState<T>(() => {
    const localCarts = localStorage.getItem("cartItems");
    if (localCarts != null) {
      return JSON.parse(localCarts);
    } else {
      return initValue;
    }
  });

  useEffect(() => {
    return localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue] as [typeof value, typeof setValue];
}
