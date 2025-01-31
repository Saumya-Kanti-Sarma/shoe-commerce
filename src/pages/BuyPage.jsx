import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function BuyPage() {
  const { selectedProduct } = useContext(CartContext);

  if (!selectedProduct) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
      <img src={selectedProduct.image} alt={selectedProduct.name} className="w-60" />
      <p className="text-lg mt-2">Price: ₹{selectedProduct.price}</p>
      <p>{selectedProduct.description}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Proceed to Payment</button>
    </div>
  );
}
