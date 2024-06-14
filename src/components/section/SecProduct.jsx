import CardProduct from "../ui/CardProduct";
import CatalogProduct from "../ui/CatalogProduct";

import { useState } from "react";

import product1 from "../../assets/1.svg";
import product2 from "../../assets/2.svg";
import product3 from "../../assets/3.svg";
import product4 from "../../assets/4.svg";
import product5 from "../../assets/5.svg";
import product6 from "../../assets/6.svg";
import product7 from "../../assets/7.svg";
import product8 from "../../assets/8.svg";
import product9 from "../../assets/9.svg";
import product10 from "../../assets/10.svg";
import product11 from "../../assets/11.svg";
import product12 from "../../assets/12.svg";

export default function SecProduct() {
  const [isProductPopupOpen, setIsProductPopupOpen] = useState(false);

  const handleOpenProductPopup = () => {
    setIsProductPopupOpen(true);
  };

  const handleCloseProductPopup = () => {
    setIsProductPopupOpen(false);
  };
  return (
    <section className="container my-12">
      <div className="grid grid-cols-4 gap-8">
        <button onClick={handleOpenProductPopup}>
          <CardProduct
            image={product1}
            name={"Fresh Herb Serum"}
            price={"26.00"}
          />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct
            image={product2}
            name={"Radian-C Spot Serum"}
            price={"28.30"}
          />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct
            image={product3}
            name={"Tone Up Sunscreen"}
            price={"13.23"}
          />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct
            image={product4}
            name={"Fresh Cica Cream"}
            price={"21.60"}
          />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct
            image={product5}
            name={"BHA cleansing"}
            price={"18.52"}
          />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct
            image={product6}
            name={"Pink AHABHA Cream"}
            price={"21.60"}
          />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct
            image={product7}
            name={"Moist Soothing Cream"}
            price={"34.00"}
          />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct
            image={product8}
            name={"Perfect Renew"}
            price={"43.68"}
          />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct
            image={product9}
            name={"All-day Airy Sunscreen"}
            price={"24.00"}
          />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct
            image={product10}
            name={"Cleansing Gel"}
            price={"23.99"}
          />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct
            image={product11}
            name={"Green Tea Mist "}
            price={"11.81"}
          />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct image={product12} name={"Uyu Cream"} price={"21.60"} />
        </button>
      </div>
      {isProductPopupOpen && (
        <CatalogProduct onClose={handleCloseProductPopup} />
      )}
    </section>
  );
}
