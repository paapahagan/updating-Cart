import React from "react";

function Basket(props) {
  const { setShowCart } = props;
  return (
    <div
      className=" w-full h-screen overflow-hidden bg-black bg-opacity-50
     absolute top-0 right-0"
      onClick={() => setShowCart(false)}
    >
      {/* basket */}
      <div className=" relative h-screen w-full">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className=" w-full max-w-[400px] absolute top-0 right-0 h-full bg-white "
        >
          <h1 className=" text-2xl font-bold">Your Basket</h1>
        </div>
      </div>
    </div>
  );
}

export default Basket;
