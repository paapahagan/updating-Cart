import Card from "./Card";

function ProductCat(props) {
  const { setShowCart, setCartCount } = props;
  const products = [
    {
      id: 0,
      productTitle: "Product 0",
      productSku: "4352",
      productImage: "",
      productDescription:
        "A simple viewer for some Open Source icon packs to customise and copy/paste into your Tailwind CSS project.",
      productPrice: "50.00",
    },
    {
      id: 1,
      productTitle: "Product 1",
      productSku: "4352",
      productImage: "",
      productDescription:
        "A simple viewer for some Open Source icon packs to customise and copy/paste into your Tailwind CSS project.",
      productPrice: "100.00",
    },
    {
      id: 2,
      productTitle: "Product 2",
      productSku: "4352",
      productImage: "",
      productDescription:
        "A simple viewer for some Open Source icon packs to customise and copy/paste into your Tailwind CSS project.",
      productPrice: "150.00",
    },
  ];
  return (
    <div className=" w-full max-w-[1200px] m-auto flex gap-2 items-center p-4 bg-red-300">
      {products.map((product) => (
        <Card
          key={product.id}
          productId={product.id}
          productTitle={product.productTitle}
          productSku={product.productSku}
          productDescription={product.productDescription}
          productPrice={product.productPrice}
          setShowCart={setShowCart}
          setCartCount={setCartCount}
        />
      ))}
    </div>
  );
}

export default ProductCat;
