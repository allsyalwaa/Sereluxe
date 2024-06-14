import ProductBesar from "../../assets/product_besar.svg";
import Button from "../ui/Button";
import CardCategory from "../ui/CardCategory";
import CardProduct from "../ui/CardProduct";

import Innisfree from "../../assets/innisfree.svg";
import Laneige from "../../assets/laneige.svg";
import Nacific from "../../assets/nacific.svg";

export default function SecHero() {
  return (
    <section className="container my-12">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 rounded-2xl bg-white p-6 shadow">
          <div className="grid grid-cols-2 items-center gap-8">
            <div>
              <img src={ProductBesar} alt="" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black">Eye Cream </h1>
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
              <p className="mt-2 line-clamp-2 text-ellipsis text-wrap text-base text-black/50">
                A nourishing eye cream that helps deeply hydrate and improve the
                moisture barrier around the delicate eye areas.
              </p>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-2xl font-semibold text-primary">$23.38</p>
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
        <div className="rounded-2xl border-[1.5px] border-primary bg-white p-6">
          <h1 className="text-xl font-semibold text-primary">Category</h1>
          <div className="mt-4 w-full border-b-[1px] border-primary"></div>
          <CardCategory image={Innisfree} name={"Innisfree"} />
          <CardCategory image={Laneige} name={"Laneige"} />
          <CardCategory image={Nacific} name={"Nacific"} />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-8">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </section>
  );
}
