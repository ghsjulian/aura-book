import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BookConsultation from "../components/BookConsultation";
import { useAppSelector } from "../store/hooks";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const { isBooking } = useAppSelector((state) => state.auth);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
        {isBooking && <BookConsultation />}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
