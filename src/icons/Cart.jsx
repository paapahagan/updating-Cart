function Cart(props) {
  const { cartCount, setShowCart } = props;

  return (
    <div
      className=" relative mr-10 cursor-pointer"
      onClick={() => setShowCart(true)}
    >
      <svg
        className="h-8 w-8 text-red-500"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="9" cy="19" r="2" />{" "}
        <circle cx="17" cy="19" r="2" />{" "}
        <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
      </svg>

      {cartCount > 0 && (
        <div
          className=" absolute size-[30px] bg-blue-500 rounded-full
       -top-[10px] -right-[24px] border-4 border-white grid place-items-center
        text-sm font-bold"
        >
          {cartCount}
        </div>
      )}
    </div>
  );
}

export default Cart;
