import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Store from "./Page/Store";

import Layout from "./Components/layout/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
      </Routes>
    </Layout>
  );
}

export default App;
