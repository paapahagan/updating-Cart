import AddToCartBtn from "./AddToCartBtn";

function Card(props) {
  const {
    productId,
    productSku,
    productDescription,
    productTitle,
    productImage,
    productPrice,
    setCartCount,
    setShowCart,
  } = props;
  return (
    <div className=" bg-white grid  p-2 rounded-md w-full min-w-[200px] max-w-[250] m-auto ">
      {/* outer */}
      <div className=" h-[100px] bg-zinc-300 rounded-md w-full"></div>
      {/* description */}
      <div className=" flex justify-between my-2">
        <p className=" font-bold">{productTitle}</p>
        <p>${productPrice}</p>
      </div>

      <div className=" my-2">{productDescription}</div>
      <AddToCartBtn setCartCount={setCartCount} setShowCart={setShowCart} />
    </div>
  );
}

export default Card;
