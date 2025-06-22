import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Admin/DashboardPage";
import ProductsPage from "./pages/Admin/ProductsPage";
import CreateProduct from "./pages/Admin/CreateProduct";
import Signup from "./pages/Common/Signup";
import Login from "./pages/Common/Login";
import Homepage from "./pages/Common/Homepage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          {/* Should be in private route */}
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/product-list" element={<ProductsPage />} />
          <Route path="/create-product" element={<CreateProduct />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
