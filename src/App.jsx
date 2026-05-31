import { Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import Auth from "./src/pages/Auth";
import Checkout from "./src/pages/Checkout";
import Navbar from "./src/components/Navbar";

import "./App.css";
import AuthProvider from "./src/context/AuthContext";
import ProductDetails from "./src/pages/ProductDetails";
import CartProvider from "./src/context/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
