import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Store from "./Page/Store";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
      </Routes>
    </>
  );
}

export default App;
