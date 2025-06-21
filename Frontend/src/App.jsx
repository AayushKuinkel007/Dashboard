import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Admin/DashboardPage";
import ProductsPage from "./pages/Admin/ProductsPage";
import CreateProduct from "./pages/Admin/CreateProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/product-list" element={<ProductsPage />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
