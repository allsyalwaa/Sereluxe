import ProductCart from "../ui/ProductCart";

export default function SecCart() {
  return (
    <section className="container my-12">
      <div className="grid grid-cols-4 gap-8">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </section>
  );
}
