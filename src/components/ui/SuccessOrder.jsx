/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

export default function SuccessOrder({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
    onClose();
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
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
            <h1 className="text-center text-4xl font-bold">
              Your Order Success
            </h1>

            <NavLink to="/">
              <Button variant="secondary" className="mx-auto mt-6">
                Continue
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
