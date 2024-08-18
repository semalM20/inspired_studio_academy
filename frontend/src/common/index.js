// const backendDomain = "https://api.inspiredstudio-academy.com";
// const backendDomain = "https://inspired-studio-academy.onrender.com";
// const backendDomain = "http://localhost:5900";
const backendDomain = "https://api.inspiredstudio-academy.com";
const SummaryApi = {
  signUP: {
    url: `${backendDomain}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${backendDomain}/api/login`,
    method: "post",
  },
  current_user: {
    url: `${backendDomain}/api/user-details`,
    method: "get",
  },
  logout_user: {
    url: `${backendDomain}/api/userLogout`,
    method: "get",
  },

  allUser: {
    url: `${backendDomain}/api/all-user`,
    method: "get",
  },
  updateUser: {
    url: `${backendDomain}/api/update-user`,
    method: "post",
  },

  bookSlot: {
    url: `${backendDomain}/api/book-slot`,
    method: "post",
  },
  allSlot: {
    url: `${backendDomain}/api/all-slot`,
    method: "get",
  },
  allSubscription: {
    url: `${backendDomain}/api/all-subscription`,
    method: "get",
  },
  forgotPassword: {
    url: `${backendDomain}/api/forgotPassword`,
    method: "post",
  },
  resetPassword: {
    url: `${backendDomain}/api/resetPassword`,
    method: "post",
  },
  payment: {
    url: `${backendDomain}/api/payment`,
    method: "post",
  },
  postReviews: {
    url: `${backendDomain}/api/post-reviews`,
    method: "post",
  },
  getReviews: {
    url: `${backendDomain}/api/get-reviews`,
    method: "get",
  },
  BeginnerCourseSlots: {
    url: `${backendDomain}/api/beginner-course-slots`,
    method: "get",
  },
  addBeginnerCourseSlots: {
    url: `${backendDomain}/api/add-beginner-course-slots`,
    method: "post",
  },

  //products
  uploadProduct: {
    url: `${backendDomain}/api/upload-product`,
    method: "post",
  },
  allProduct: {
    url: `${backendDomain}/api/get-product`,
    method: "get",
  },
  updateProduct: {
    url: `${backendDomain}/api/update-product`,
    method: "post",
  },
  productdetails: {
    url: `${backendDomain}/api/product-details`,
    method: "post",
  },
  categoryWiseProduct: {
    url: `${backendDomain}/api/category-product`,
    method: "post",
  },

  //cart
  addToCartProduct: {
    url: `${backendDomain}/api/addtocart`,
    method: "post",
  },
  addToCartProductCount: {
    url: `${backendDomain}/api/countAddToCartProduct`,
    method: "get",
  },
  addToCartProductView: {
    url: `${backendDomain}/api/view-cart-product`,
    method: "get",
  },
  updateCartProduct: {
    url: `${backendDomain}/api/update-cart-product`,
    method: "post",
  },
  deleteCartProduct: {
    url: `${backendDomain}/api/delete-cart-product`,
    method: "post",
  },
  //checkout
  shopUserDetails: {
    url: `${backendDomain}/api/shop-user-details`,
    method: "post",
  },
  shopPayment: {
    url: `${backendDomain}/api/shop-payment`,
    method: "post",
  },
  shopBuyers: {
    url: `${backendDomain}/api/shop-user-buyers`,
    method: "get",
  },
  //finance Plan Query
  postFinancePlanQueries: {
    url: `${backendDomain}/api/send-query`,
    method: "post",
  },
  getFinancePlanQueries: {
    url: `${backendDomain}/api/get-all-queries`,
    method: "get",
  },
  //blog videos
  uploadBlogVideos: {
    url: `${backendDomain}/api/upload-blog-video`,
    method: "post",
  },
  getBlogVideos: {
    url: `${backendDomain}/api/get-blog-videos`,
    method: "get",
  }
};

export default SummaryApi;
