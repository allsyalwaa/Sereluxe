import checkout from "../../assets/checkout.svg";
import Bri from "../../assets/bri.svg";
import bca from "../../assets/bca.svg";
import mandiri from "../../assets/mandiri.svg";
import Button from "../ui/Button";
import { NavLink } from "react-router-dom";

export default function SecCheckout() {
  return (
    <section className="container my-12">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="grid grid-cols-2 items-center gap-6 rounded-xl border-[1.5px] border-primary p-6">
            <img src={checkout} alt="" />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold text-black">Cleansing Gel</h1>
              <p className="text-base font-medium">Qty : 3</p>
              <p className="text-lg font-semibold text-primary">$71.97</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border-[1.5px] border-primary p-6">
          <h1 className="font-medium italic">Pay with</h1>
          <form action="" className="mt-4 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <input type="radio" name="payment" id="payment1" />
              <img src={Bri} alt="" />
            </div>
            <div className="flex items-center gap-4">
              <input type="radio" name="payment" id="payment1" />
              <img src={bca} alt="" />
            </div>
            <div className="flex items-center gap-4">
              <input type="radio" name="payment" id="payment1" />
              <img src={mandiri} alt="" />
            </div>
          </form>
          <NavLink to="/payment">
            <Button type="submit" variant="primary" className="mt-6 w-full">
              Payment
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
