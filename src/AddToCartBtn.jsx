import React from "react";

function AddToCartBtn(props) {
  const { showCart } = props;
  return (
    <button className="py-2 bg-blue-400 text-white rounded-md my-2 hover:bg-blue-500">
      Add To Cart
    </button>
  );
}

export default AddToCartBtn;
