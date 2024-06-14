import Cart from "./icons/Cart";

function Nav(props) {
  const { cartCount, setShowCart } = props;
  return (
    <div className=" bg-white rounded-md p-4">
      <div className=" flex justify-between items-center w-full max-w-[1200px] m-auto sticky ">
        <p className=" text-xl text-red-500">
          Shop <span className=" font-extralight">Now</span>
        </p>
        <Cart cartCount={cartCount} setShowCart={setShowCart} />
      </div>
    </div>
  );
}

export default Nav;
