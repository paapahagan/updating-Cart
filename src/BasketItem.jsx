function BasketItem(props) {
  const { name, price } = props;
  return (
    <div className=" bg-white p-2 rounded-md my-5 flex items-center">
      {/* image */}
      <div className=" bg-gray-600 h-[50px] max-w-[75px] w-full mr-5"></div>
      <div className=" w-full flex gap-5 items-center">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default BasketItem;
