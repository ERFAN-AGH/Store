import { createContext, useState } from "react";

export const LoginCartContext = createContext();

function LoginContext() {
  const [isLogin, setISLogin] = useState(false);
  return (
    <LoginCartContext.Provider value={{ isLogin }}></LoginCartContext.Provider>
  );
}

export default LoginContext;
