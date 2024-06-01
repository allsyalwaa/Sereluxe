import Product3 from "../../assets/product3.svg";
import Bri from "../../assets/bri.svg";
import Button from "../ui/Button";

export default function SecCheckout() {
  return (
    <section className="container my-12">
      <div className="grid grid-cols-2 gap-8">
        <div className="border-primary rounded-xl border-[1.5px] p-6">
          <div className="grid grid-cols-2 items-center gap-6">
            <img src={Product3} alt="" />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold text-black">Nama product</h1>
              <p className="text-base font-medium">Qty : 3</p>
              <p className="text-primary text-lg font-semibold">$Total</p>
            </div>
          </div>
        </div>
        <div className="border-primary rounded-xl border-[1.5px] p-6">
          <h1 className="font-medium italic">Pay with</h1>
          <form action="" className="mt-4 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <input type="radio" name="payment" id="payment1" />
              <img src={Bri} alt="" />
            </div>
            <div className="flex items-center gap-4">
              <input type="radio" name="payment" id="payment1" />
              <img src={Bri} alt="" />
            </div>
            <div className="flex items-center gap-4">
              <input type="radio" name="payment" id="payment1" />
              <img src={Bri} alt="" />
            </div>
          </form>
          <Button type="submit" variant="primary" className="mt-6 w-full">
            Payment
          </Button>
        </div>
      </div>
    </section>
  );
}
