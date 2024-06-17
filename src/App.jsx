import { useState } from "react";
import Nav from "./Nav";
import ProductCat from "./ProductCat";
import Basket from "./Basket";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([
    {
      name: "product",
      price: 50,
    },
  ]);

  return (
    <div className=" bg-slate-200 min-h-screen w-full ">
      <Nav cartCount={cartCount} setShowCart={setShowCart} />
      <ProductCat setShowCart={setShowCart} setCartCount={setCartCount} />

      {showCart && (
        <Basket cart={cart} setCart={setCart} setShowCart={setShowCart} />
      )}
    </div>
  );
}

export default App;
