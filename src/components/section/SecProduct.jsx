import CardProduct from "../ui/CardProduct";
import CatalogProduct from "../ui/CatalogProduct";

export default function SecProduct() {
  return (
    <section className="container my-12">
      <div className="grid grid-cols-4 gap-8">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <CatalogProduct />
    </section>
  );
}