import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Store from "./Page/Store";
import Layout from "./Components/layout/Layout";
import ProductPage from "./Page/ProductPage";
import Cart from "./Page/Cart";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/ProductPage/:id" element={<ProductPage />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
