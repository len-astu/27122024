import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
<Route path="/seller/products" element={<SellerProductList />} />
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProductList />} />
    </Routes>
  </Router>
);

export default App;
