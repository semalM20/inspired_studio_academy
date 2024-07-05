import React from "react";
import ShopProductDetails from "../products/ShopProductDetails";
import Footer from "../../components/Footer";

const Shop = () => {
  return (
    <>
      {}
      {/* <h3 className=" mb-[555px]">Coming Soon...</h3> */}
      <ShopProductDetails category={"Products"} heading={"All Products"} />
      <ShopProductDetails category={"Combos"} heading={"All Combos"} />
      <Footer />
    </>
  );
};

export default Shop;
