/* eslint-disable react/prop-types */
import Button from "./Button";

export default function ProductCart({ image, name, price, totalprice }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white p-4 shadow">
      <img src={image} alt="" />
      <h1 className="text-xl font-semibold text-black">{name}</h1>
      <div className="flex items-center justify-between">
        <p className="text-xl font-medium text-primary">${price}</p>
        <div className="flex items-center gap-2 rounded-full border-[1.5px] border-black/50 p-1">
          <div className="rounded-full bg-black/50 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.8em"
              height="0.8em"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <path
                fill="currentColor"
                d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-black/50">1</p>
          <div className="rounded-full bg-black/50 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.8em"
              height="0.8em"
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
      <p className="flex justify-end text-sm font-medium">${totalprice}</p>
      <Button className={"w-full"} variant="primary">
        Buy Now
      </Button>
    </div>
  );
}
