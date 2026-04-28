import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Store from "./Page/Store";
import Layout from "./Components/layout/layout";
import ProductPage from "./Page/ProductPage";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/ProductPage/:id" element={<ProductPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
