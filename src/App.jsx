import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import ProductDetail from "./pages/ProductDetail";
import CartProvider from "./context/CartContext";
import CartPage from "./pages/CartPage";
import BuyPage from "./pages/BuyPage";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <CartProvider>

      <Router>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
