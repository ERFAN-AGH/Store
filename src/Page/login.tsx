import React, { useState } from "react";
import Button from "../Components/Button/Button";
import { useShopCaretContext } from "../Components/context/ShopCaretContext";

function Login() {
  const { handelLogin } = useShopCaretContext();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handelCahnge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="userName"
          onChange={handelCahnge}
          name="username"
          value={user.username}
        />
        <input
          type="password"
          placeholder="password"
          onChange={handelCahnge}
          name="password"
          value={user.password}
        />
        <Button
          Variant="sucsses"
          className="mt-5"
          onClick={() => handelLogin(user.password, user.username)}
        >
          Login
        </Button>
      </div>
    </>
  );
}

export default Login;
