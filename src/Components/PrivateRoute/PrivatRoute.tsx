import { Navigate, Outlet } from "react-router-dom";
import { useShopCaretContext } from "../context/ShopCaretContext";

function PrivatRoute() {
  const { isLogin } = useShopCaretContext();
  return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
}
export default PrivatRoute;
