import SummaryApi from "../../common";
import { toast } from "react-toastify";

const AddToCart = async (e, id, uId) => {
  e?.stopPropagation();
  e?.preventDefault();

  if (!uId) {
    toast.error("You must be logged in to add items to your cart");
    return;
  }

  const response = await fetch(SummaryApi.addToCartProduct.url, {
    method: SummaryApi.addToCartProduct.method,
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ productId: id, userId: uId }),
  });

  const responseData = await response.json();

  if (responseData.success) {
    toast.success(responseData.message);
  }
  if (responseData.error) {
    toast.error(responseData.message);
  }

  return responseData;
};

export default AddToCart;
