import Bri from "../../assets/bri.svg";
import Button from "../ui/Button";
import SuccessOrder from "../ui/SuccessOrder";

import { useState } from "react";

export default function SecPayment() {
  const [isSuccessOrderPopupOpen, setIsSuccessOrderPopupOpen] = useState(false);

  const handleOpenSuccessOrderPopup = () => {
    setIsSuccessOrderPopupOpen(true);
  };

  const handleCloseSuccessOrderPopup = () => {
    setIsSuccessOrderPopupOpen(false);
  };
  return (
    <section className="container my-12">
      <div className="grid grid-cols-2 gap-6">
        <div className="grid grid-cols-2 items-center justify-between">
          <p className="text-base font-semibold">Total Payment :</p>
          <p className="flex justify-end text-base">$15.00</p>
        </div>
        <div className="grid grid-cols-2 items-center justify-between">
          <p className="text-base font-semibold">Due by :</p>
          <p className="flex justify-end text-base">23 Mar 2024, 19:56</p>
        </div>
      </div>
      <div className="border-primary mt-6 rounded-xl border-[1.5px] p-6">
        <img src={Bri} alt="" />
        <div className="border-primary mt-4 w-full border-b-[1px]"></div>
        <p className="mt-4 text-xl font-semibold">Account Number :</p>
        <div className="mt-4 flex items-center gap-8">
          <p className="text-primary text-2xl font-semibold">
            4234 3425 3453 342
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z" />
              <path d="M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h4a3 3 0 0 1 3 3" />
            </g>
          </svg>
        </div>
      </div>
      <div className="border-primary mt-6 rounded-xl border-[1.5px] p-6">
        <p className="mt-4 text-xl font-semibold">Transfer Insctructions</p>
        <div className="mt-4 flex items-center gap-4">
          <div className="w-8 rounded-full border-[1.5px] border-black p-1">
            <p className="ml-2 text-sm font-medium">1</p>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <div className="w-8 rounded-full border-[1.5px] border-black p-1">
            <p className="ml-2 text-sm font-medium">2</p>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <div className="w-8 rounded-full border-[1.5px] border-black p-1">
            <p className="ml-2 text-sm font-medium">3</p>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <div className="w-8 rounded-full border-[1.5px] border-black p-1">
            <p className="ml-2 text-sm font-medium">4</p>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <div className="w-8 rounded-full border-[1.5px] border-black p-1">
            <p className="ml-2 text-sm font-medium">5</p>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <button onClick={handleOpenSuccessOrderPopup} className="mt-6 w-full">
        <Button type="submit" variant="primary" className="mt-6 w-full">
          Confirmation
        </Button>
      </button>

      {isSuccessOrderPopupOpen && (
        <SuccessOrder onClose={handleCloseSuccessOrderPopup} />
      )}
    </section>
  );
}
