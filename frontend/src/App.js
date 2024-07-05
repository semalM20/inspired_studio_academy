import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();

  const userD = useSelector((state) => state?.user?.user);

  useEffect(() => {
    if (!userD) {
      const user = JSON.parse(localStorage.getItem("session"));
      if (user) {
        dispatch(setUserDetails(user));
      }
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
    </>
  );
}

export default App;
