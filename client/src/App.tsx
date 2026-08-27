import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import ForgetPassword from "./pages/ForgetPassword";
import EmailSent from "./pages/EmailSent";
import ReseetNewPassword from "./pages/ReseetNewPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verification-sent" element={<EmailSent />} />
        <Route path="/reset-password" element={<ReseetNewPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
