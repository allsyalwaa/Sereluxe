import ProductCart from "../ui/ProductCart";

import product2 from "../../assets/2.svg";
import product4 from "../../assets/4.svg";
import product5 from "../../assets/5.svg";
import product6 from "../../assets/6.svg";
import product7 from "../../assets/7.svg";
import product8 from "../../assets/8.svg";
import product9 from "../../assets/9.svg";
import product10 from "../../assets/10.svg";


export default function SecCart() {
  return (
    <section className="container my-12">
      <div className="grid grid-cols-4 gap-8">
        <ProductCart
          image={product5}
          name={"BHA cleansing"}
          price={"18.52"}
          totalprice={"37.04"}
        />
        <ProductCart
          image={product10}
          name={"Cleansing Gel"}
          price={"23.99"}
          totalprice={"71.97"}
        />
        <ProductCart
          image={product7}
          name={"Moist Soothing Cream"}
          price={"34.00"}
          totalprice={"34.00"}
        />
        <ProductCart
          image={product6}
          name={"Pink AHABHA Cream"}
          price={"21.60"}
          totalprice={"43.20"}
        />
        <ProductCart
          image={product2}
          name={"Radian-C Spot Serum"}
          price={"28.30"}
          totalprice={"28.30"}
        />
        <ProductCart
          image={product4}
          name={"Fresh Cica Cream"}
          price={"21.60"}
          totalprice={"64.8"}
        />
        <ProductCart
          image={product9}
          name={"Allday Airy Sunscreen"}
          price={"24.00"}
          totalprice={"72.00"}
        />
        <ProductCart
          image={product8}
          name={"Perfect Renew"}
          price={"43.68"}
          totalprice={"43.68"}
        />
      </div>
    </section>
  );
}
