/* eslint-disable react/prop-types */
import Product4 from "../../assets/product4.svg";

import { useState } from "react";
import Button from "./Button";

export default function CatalogProduct({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex justify-end">
              <button onClick={closePopup} className="text-black/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4 flex w-full flex-col justify-start">
              <img className="h-56" src={Product4} alt="" />
              <h1 className="mt-4 text-3xl font-bold text-black">
                Nama Product
              </h1>
              <div className="mt-2 flex items-center gap-2 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className="text-[#FFF852]"
                >
                  <path
                    fill="currentColor"
                    d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"
                  />
                </svg>
                <p className="text-base">4.6</p>
              </div>
              <p className="mt-2 text-wrap text-base text-black/50">
                Lorem ipsum dolor sit amet,consectetur adipiscing elit. Lorem
                ipsum dolor sit amet,consectetur adipiscing elit. Lorem ipsum..
              </p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-primary text-2xl font-semibold">$5.00</p>
                <div className="flex items-center gap-2 rounded-full border-[1.5px] border-black/50 p-1">
                  <div className="rounded-full bg-black/50 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="text-white"
                    >
                      <path
                        fill="currentColor"
                        d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"
                      />
                    </svg>
                  </div>
                  <p className="text-md font-medium text-black/50">1</p>
                  <div className="rounded-full bg-black/50 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="text-white"
                    >
                      <path
                        fill="currentColor"
                        d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between gap-6">
                <Button className={"w-full"} variant="secondary">
                  Add to cart
                </Button>
                <Button className={"w-full"} variant="primary">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
