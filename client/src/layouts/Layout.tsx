import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BookConsultation from "../components/BookConsultation";
import { useAppSelector } from "../store/hooks";

const Layout = () => {
  const { isBooking } = useAppSelector((state) => state.auth);

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
