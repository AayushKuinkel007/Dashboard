import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Admin/DashboardPage";
import ProductsPage from "./pages/Admin/ProductsPage";
import CreateProduct from "./pages/Admin/CreateProduct";
import Signup from "./pages/Common/Signup";
import Login from "./pages/Common/Login";
import Homepage from "./pages/Common/Homepage";
import Profile from "./pages/Common/Profile";
import PrivateRoute from "../routes/Privateroute";
import UserDashboard from "./pages/Common/UserDashboard";
import SellerDashboard from "./pages/Seller/SellerDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Should be in private route */}

          {/* user */}
          <Route path="/profile" element={
            <PrivateRoute>
            <Profile/>
            </PrivateRoute>
            } />
            {/* <Route path="/profile" element={<Profile/>}/> */}
          <Route
            path="/user"
            element={
              <PrivateRoute role="user">
                <UserDashboard />
              </PrivateRoute>
            }
          />

          {/* Admin */}
          <Route
            path="/admin"
            element={
              <PrivateRoute role="admin">
                <DashboardPage />
              </PrivateRoute>
            }
          />

          {/* seller */}
          <Route
            path="/seller"
            element={
              <PrivateRoute role="seller">
                <SellerDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/product-list"
            element={
              <PrivateRoute role="admin">
                <ProductsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/create-product"
            element={
              <PrivateRoute role="admin">
                <CreateProduct />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
