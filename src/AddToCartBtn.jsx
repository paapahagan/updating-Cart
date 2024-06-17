import React, { useState } from "react";

function AddToCartBtn(props) {
  const { setShowCart, setCartCount } = props;
  const [isLoading, setIsLoading] = useState(false);
  return (
    <button
      onClick={() => {
        setIsLoading(true);
        setTimeout(() => {
          setShowCart(true);
          setIsLoading(false);
        }, 1000),
          setCartCount((prevCount) => prevCount + 1);
      }}
      className="py-2 bg-blue-400 text-white rounded-md my-2 hover:bg-blue-500"
    >
      {isLoading ? "Adding..." : "Add to Cart"}
    </button>
  );
}

export default AddToCartBtn;
