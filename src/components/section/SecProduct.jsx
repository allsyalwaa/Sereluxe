import CardProduct from "../ui/CardProduct";
import CatalogProduct from "../ui/CatalogProduct";

import { useState } from "react";

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
          <CardProduct />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct />
        </button>

        <button onClick={handleOpenProductPopup}>
          <CardProduct />
        </button>
      </div>
      {isProductPopupOpen && (
        <CatalogProduct onClose={handleCloseProductPopup} />
      )}
    </section>
  );
}
