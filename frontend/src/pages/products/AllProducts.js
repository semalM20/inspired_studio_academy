import React, { useEffect, useState } from "react";
import SummaryApi from "../../common";
import AdminProductCard from "./AdminProductCard";
import UploadProducts from "./UploadProducts";

const AllProducts = () => {
  const [openUploadProducts, setOpenUploadProducts] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const fetchAllProducts = async () => {
    const response = await fetch(SummaryApi.allProduct.url, {
      method: SummaryApi.allProduct.method,
    });

    const dataResponse = await response.json();

    setAllProducts(dataResponse?.data || []);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">All Products</h2>
        <button
          className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full"
          onClick={() => {
            setOpenUploadProducts(true);
          }}
        >
          Upload Product
        </button>
      </div>

      {/* all products */}
      <div className="flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll">
        {allProducts.map((product, index) => {
          return (
            <AdminProductCard
              data={product}
              key={index + "allProduct"}
              fetchData={fetchAllProducts}
            />
          );
        })}
      </div>

      {/* upload product component */}
      {openUploadProducts && (
        <UploadProducts
          onClose={() => {
            setOpenUploadProducts(false);
          }}
          fetchData={fetchAllProducts}
        />
      )}
    </div>
  );
};

export default AllProducts;
