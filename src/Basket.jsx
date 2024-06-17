import BasketItem from "./BasketItem";

function Basket(props) {
  const { showCart, cart, setShowCart } = props;
  return (
    <div
      className=" w-full h-screen overflow-hidden bg-black bg-opacity-50
     absolute top-0 right-0 overlay-ani"
      onClick={() => setShowCart(false)}
    >
      {/* basket */}
      <div className=" relative h-screen w-full">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className=" w-full max-w-[400px] absolute top-0 right-0 h-full bg-zinc-200 p-5 cart-ani opacity-0 "
        >
          <h1 className=" text-2xl font-bold">Your Basket</h1>

          <ul>
            {cart.map((item) => (
              <BasketItem name={item.name} price={item.price} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Basket;
