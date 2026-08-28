import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import ForgetPassword from "./pages/ForgetPassword";
import EmailSent from "./pages/EmailSent";
import ReseetNewPassword from "./pages/ReseetNewPassword";
import UserSignup from "./pages/UserSignup";
import UserProfile from "./pages/UserProfile";
import Stylish from "./components/Stylish";
import ContactUS from "./components/ContactUS";
import ServicesSection from "./components/ServicesSection";
import AboutUS from "./components/AboutUS";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="stylish" element={<Stylish />} />
          <Route path="contact" element={<ContactUS />} />
          <Route path="about" element={<AboutUS />} />
          <Route path="services" element={<ServicesSection />} />
        </Route>
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verification-sent" element={<EmailSent />} />
        <Route path="/reset-password" element={<ReseetNewPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
