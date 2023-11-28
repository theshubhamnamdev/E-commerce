import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { ProductProvider } from "./context/products/ProductContext";
import { SidebarProvider } from "./context/sidebar/SidebarContext";
import { CartProvider } from "./context/cart/CartContext";
// import { CartProvider } from "./context/cart/CartContext";

const App = () => {
  return (
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <div className="overflow-hidden">
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
              </Routes>
              <Sidebar />
              <Footer />
            </Router>
          </div>
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  );
};

export default App;
