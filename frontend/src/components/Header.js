// import React, { useState } from "react";
// import Logo from "../assets/Logo .jpg";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import SummaryApi from "../common";
// import { toast } from "react-toastify";
// import { setUserDetails } from "../store/userSlice";
// import ROLE from "../common/role";

// const Header = () => {
//   const user = useSelector((state) => state?.user?.user);
//   const cartCount = useSelector((state) => state?.cart?.count);

//   const dispatch = useDispatch();

//   const [menuDisplay, setMenuDisplay] = useState(false);

//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     const fetchData = await fetch(SummaryApi.logout_user.url, {
//       method: SummaryApi.logout_user.method,
//       credentials: "include",
//     });

//     const data = await fetchData.json();

//     if (data.success) {
//       toast.success(data.message);
//       dispatch(setUserDetails(null));
//       localStorage.clear();
//       navigate("/login");
//     }

//     if (data.error) {
//       toast.error(data.message);
//     }
//   };

//   return (
//     <>
//       <header>
//         <div className="top-bar">
//           <div className="left-content">
//             <Link to="tel:+44 7448 452820" className="mobile-link">
//               Mobile
//             </Link>
//           </div>
//           <div className="right-content">
//             <p>WE ARE OPEN 7 DAYS A WEEK</p>
//           </div>
//         </div>

//         <nav className="navbar">
//           <div className="navbar-left">
//             <Link to="/">
//               <img src={Logo} alt="Logo" />
//             </Link>
//           </div>
//           <div className="navbar-center">
//             <Link to="/" className="nav-link">
//               HOME{" "}
//             </Link>
//             <Link to="/course" className="nav-link">
//               COURSE{" "}
//             </Link>
//             <Link to="/booking" className="nav-link">
//               BOOK SESSION
//             </Link>

//             <Link to="/shop" className="nav-link">
//               SHOP
//             </Link>
//             <Link to="/reviews" className="nav-link">
//               VIEW REVIEWS
//             </Link>
//           </div>
//           <div className="flex items-center gap-7">
//             <div className="relative flex justify-center">
//               {user?._id && (
//                 <div
//                   className="text-3xl cursor-pointer relative flex justify-center"
//                   onClick={() => {
//                     setMenuDisplay((preve) => !preve);
//                   }}
//                 >
//                   {user?.profilePic ? (
//                     <img
//                       src={user.profilePic}
//                       alt={user?.name}
//                       className="w-10 h-10 rounded-full"
//                     />
//                   ) : (
//                     <FaRegCircleUser className="text-white" />
//                   )}
//                 </div>
//               )}

//               {menuDisplay && (
//                 <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
//                   <nav>
//                     {user?.role === ROLE.ADMIN && (
//                       <Link
//                         to={"/admin-panel/"}
//                         className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
//                         onClick={() => {
//                           setMenuDisplay((preve) => !preve);
//                         }}
//                       >
//                         Admin Panel
//                       </Link>
//                     )}
//                   </nav>
//                 </div>
//               )}
//             </div>
//             {user?._id && (
//               <Link to={"/cart"} className="text-2xl relative text-white">
//                 <span>
//                   <FaShoppingCart />
//                 </span>
//                 <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
//                   <p className="text-sm">{cartCount}</p>
//                 </div>
//               </Link>
//             )}

//             <div>
//               {user?._id ? (
//                 <button
//                   onClick={handleLogout}
//                   className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <Link
//                   to="/login"
//                   className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
//                 >
//                   Login
//                 </Link>
//               )}
//             </div>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Header;



import React, { useState } from "react";
import Logo from "../assets/Logo .jpg";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import ROLE from "../common/role";
import './Header.css';

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const cartCount = useSelector((state) => state?.cart?.count);

  const dispatch = useDispatch();

  const [menuDisplay, setMenuDisplay] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      localStorage.clear();
      navigate("/login");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header>
        <div className="top-bar">
          <div className="left-content">
            <Link to="tel:+44 7448 452820" className="mobile-link">
              Mobile
            </Link>
          </div>
          <div className="right-content">
            <p>WE ARE OPEN 7 DAYS A WEEK</p>
          </div>
        </div>

        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className={`navbar-center ${navOpen ? 'open' : ''}`}>
            <Link to="/" className="nav-link">
              HOME
            </Link>
            <Link to="/course" className="nav-link">
              COURSE
            </Link>
            <Link to="/booking" className="nav-link">
              BOOK SESSION
            </Link>
            <Link to="/shop" className="nav-link">
              SHOP
            </Link>
            <Link to="/reviews" className="nav-link">
              VIEW REVIEWS
            </Link>
          </div>
          <div className="navbar-right">
            <div className="relative flex justify-center items-center">
              {user?._id && (
                <div
                  className="text-3xl cursor-pointer relative flex justify-center"
                  onClick={() => {
                    setMenuDisplay((prev) => !prev);
                  }}
                >
                  {user?.profilePic ? (
                    <img
                      src={user.profilePic}
                      alt={user?.name}
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <FaRegCircleUser className="text-white" />
                  )}
                </div>
              )}

              {menuDisplay && (
                <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
                  <nav>
                    {user?.role === ROLE.ADMIN && (
                      <Link
                        to={"/admin-panel/"}
                        className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                        onClick={() => {
                          setMenuDisplay((prev) => !prev);
                        }}
                      >
                        Admin Panel
                      </Link>
                    )}
                  </nav>
                </div>
              )}
            </div>
            {user?._id && (
              <Link to={"/cart"} className="text-2xl relative text-white">
                <span>
                  <FaShoppingCart />
                </span>
                <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                  <p className="text-sm">{cartCount}</p>
                </div>
              </Link>
            )}

            <div>
              {user?._id ? (
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className="menu-toggle" onClick={toggleNav}>
            {navOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
