import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, selectedProduct, setSelectedProduct }}>
      {children}
    </CartContext.Provider>
  );
}
