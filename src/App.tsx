import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Store from "./Page/Store";
import Layout from "./Components/layout/Layout";
import ProductPage from "./Page/ProductPage";
import Cart from "./Page/Cart";
import { useShopCaretContext } from "./Components/context/ShopCaretContext";
import PrivatRoute from "./Components/PrivateRoute/PrivatRoute";
import Login from "./Page/login";

function App() {
  const { isLogin } = useShopCaretContext();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/ProductPage/:id" element={<ProductPage />} />
        <Route element={<PrivatRoute />}>
          <Route path="/Cart" element={<Cart />} />
        </Route>

        <Route
          path="/login"
          element={isLogin ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
