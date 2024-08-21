import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import Booking from "../pages/booking/Booking";
import Course from "../pages/course/Course";
import Shop from "../pages/shop/Shop";
import AllSlots from "../pages/AllSlots";
import VideoContent from "../pages/courseVideo/videoContent";
import Checkoutt from "../pages/onlinePayments/Checkoutt";
import ResetPassword from "../pages/ResetPassword";
import Success from "../pages/onlinePayments/Success";
import Failed from "../pages/onlinePayments/Failed";
import BookingConfirmedOnline from "../pages/BookingConfirmedOnline";
import BookingConfirmedOfflineB from "../pages/BookingConfirmedOfflineB";
import BookingConfirmedOfflineM from "../pages/BookingConfirmedOfflineM";
import OfflineB from "../pages/payItMonthly/OfflineB";
import CheckoutOffB from "../pages/onlinePayments/CheckoutOffB";
import CheckoutOffM from "../pages/onlinePayments/CheckoutOffM";
import FinalTest from "../pages/courseVideo/FinalTest";
import Review from "../pages/reviews/Review";
import ReviewForm from "../pages/reviews/ReviewForm";
import PdfCourse from "../pages/courseVideo/PdfCourse";
import PdfCourse2 from "../pages/courseVideo/PdfCourse2";
import PdfCourse3 from "../pages/courseVideo/PdfCourse3";
import SlotsForBegCourse from "../pages/SlotsForBegCourse";
import AllSubscription from "../pages/AllSubscribes";
import AddSlots from "../pages/AddSlots";
import ShowSlots from "../pages/ShowSlots";
import AllProducts from "../pages/products/AllProducts";
import ProductDetails from "../pages/products/ProductDetails";
import Cart from "../pages/cart/Cart";
import ShopCheckout from "../pages/checkout/ShopCheckout";
import CheckoutSummary from "../pages/checkout/CheckoutSummary";
import ShopPaymentFailed from "../pages/checkout/ShopPaymentFailed";
import ShopPaymentSuccess from "../pages/checkout/ShopPaymentSuccess";
import ShopProducts from "../pages/checkout/ShopProducts";
import FinancePlan from "../pages/financePlan/FinancePlan";
import ShowQueries from '../pages/financePlan/ShowQueries';
import BlogPage from "../pages/blog/BlogPage";
import UploadVideo from "../pages/blog/UploadVideo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "course",
        element: <Course />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "videoCourse",
        element: <VideoContent />,
      },
      {
        path: "educationTest",
        element: <FinalTest />,
      },
      {
        path: "onlineCoursePayment",
        // 1250 + 20% VAT(250VAT) ===> 500 + 100(VAT)
        element: <Checkoutt paymentType="onlineCoursePayment" amount="600" />,
      },
      {
        path: "bookingConfirmedOnline",
        element: <BookingConfirmedOnline />,
      },

      {
        path: "offlineBCoursePayment",
        // 1999 + 20% VAT = 399.8 Total = 2398.8£
        element: (
          <CheckoutOffB paymentType="offlineBCoursePayment" amount="2398.8" />
        ),
      },
      {
        path: "bookingConfirmedOfflineB",
        element: <BookingConfirmedOfflineB />,
      },
      {
        path: "OfflineBPayItMonthly",
        element: <OfflineB />,
      },
      {
        path: "slotsForBegCourse",
        element: <SlotsForBegCourse />,
      },
      {
        path: "offlineMCoursePayment",
        // 300 + VAT 20% = 360
        element: (
          <CheckoutOffM paymentType="offlineMCoursePayment" amount="360" />
        ),
      },
      {
        path: "bookingConfirmedOfflineM",
        element: <BookingConfirmedOfflineM />,
      },

      {
        path: "success",
        element: <Success />,
      },
      {
        path: "failed",
        element: <Failed />,
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "resetPassword",
        element: <ResetPassword />,
      },
      {
        path: "reviews",
        element: <Review />,
      },
      {
        path: "addReviews",
        element: <ReviewForm />,
      },
      {
        path: "pdfCourse",
        element: <PdfCourse />,
      },
      {
        path: "pdfCourse2",
        element: <PdfCourse2 />,
      },
      {
        path: "pdfCourse3",
        element: <PdfCourse3 />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "shopCheckout",
        element: <ShopCheckout />,
      },
      {
        path: "checkoutSummary",
        element: <CheckoutSummary />,
      },
      {
        path: "shopPaymentFailed",
        element: <ShopPaymentFailed />,
      },
      {
        path: "shopPaymentSuccess",
        element: <ShopPaymentSuccess />,
      },
      {
        path: "financePlan",
        element: <FinancePlan />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
        children: [
          {
            path: "all-users",
            element: <AllUsers />,
          },
          {
            path: "all-slots",
            element: <AllSlots />,
          },
          {
            path: "all-subscriptions",
            element: <AllSubscription />,
          },
          {
            path: "add-slots",
            element: <AddSlots />,
          },
          {
            path: "show-slots",
            element: <ShowSlots />,
          },
          {
            path: "all-products",
            element: <AllProducts />,
          },
          {
            path: "shop-products",
            element: <ShopProducts />,
          },
          {
            path: "show-queries",
            element: <ShowQueries />,
          },
          {
            path: "blog-products",
            element: <UploadVideo />
          }
        ],
      },
    ],
  },
]);

export default router;
