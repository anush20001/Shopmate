import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Shopmate</span>{" "}
          ShopMate is your ultimate destination for all your e-commerce needs. With a vast array of products ranging from electronics to fashion, home decor to health and beauty, ShopMate offers a seamless shopping experience for every customer. At ShopMate, we pride ourselves on providing high-quality products from trusted brands at competitive prices. Our user-friendly website interface and intuitive search functionality make it easy for customers to find exactly what they're looking for. Whether you're shopping for the latest gadgets, trendy fashion pieces, or household essentials, ShopMate has you covered. With fast and reliable shipping options, convenient payment methods, and responsive customer support, ShopMate ensures that your shopping experience is convenient and hassle-free. Plus, our regular promotions, discounts, and loyalty rewards add extra value to every purchase.
           Join the ShopMate community today and discover the joy of online shopping done right. Shop with confidence, shop with ease—shop at ShopMate.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
