import { useState } from "react";
import Nav from "./Nav";
import ProductCat from "./ProductCat";

function App() {
  const [cartCount, setCartCount] = useState(3);

  return (
    <div className=" bg-slate-200 min-h-screen w-full ">
      <Nav cartCount={cartCount} />
      <ProductCat />
    </div>
  );
}

export default App;
