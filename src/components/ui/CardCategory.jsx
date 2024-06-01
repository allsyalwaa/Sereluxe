import Product3 from "../../assets/product3.svg";

export default function CardCategory() {
  return (
    <div className="mt-4 flex items-center gap-6">
      <img className="h-16" src={Product3} alt="" />
      <p className="text-block text-lg font-semibold">Merk product</p>
    </div>
  );
}
