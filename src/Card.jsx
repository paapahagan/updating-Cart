function Card(props) {
  const {
    productId,
    productSku,
    productDescription,
    productTitle,
    productImage,
    productPrice,
  } = props;
  return (
    <div className=" bg-white grid  p-2 rounded-md w-full min-w-[200px] max-w-[250] m-auto ">
      {/* outer */}
      <div className=" h-[100px] bg-zinc-300 rounded-md w-full"></div>
      {/* description */}
      <div className=" flex justify-between my-2">
        <p>{productTitle}</p>
        <p>{productPrice}</p>
      </div>

      <div>{productDescription}</div>
      <button className="py-2 bg-blue-400 text-white rounded-md my-2 hover:bg-blue-500">
        Add to cart
      </button>
    </div>
  );
}

export default Card;
