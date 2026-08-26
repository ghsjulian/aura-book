import { ArrowRight, MoveRight } from "lucide-react";
import type { MouseEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logoutApi, type logoutInterface } from "../services/auth.services";
import { logout, setLoading } from "../store/slices/auth.slice";

const Navbar = (isMenu: boolean) => {
  const navigate = useNavigate();
  const { token, user, isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (!user || !token) {
      navigate("/user-login");
      return;
    }

    if (isLoading) return;

    dispatch(setLoading(true));
    let result: logoutInterface = await logoutApi();
    setTimeout(() => {
      dispatch(setLoading(false));
      if (result?.success) {
        dispatch(logout());
        navigate("/user-login");
      }
    }, 1500);
  };

  return (
    <nav className={isMenu ? "mobile-menu" : undefined}>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/stylish">Stylish</NavLink>
      {token ? (
        <>
          <NavLink to={`user-profile?id=${user?._id}`}>Profile</NavLink>
          <NavLink
            onClick={handleLogout}
            className="logout-btn"
            to={`user-logout`}
          >
            {isLoading ? (
              <>
                <div
                  style={{ width: "20px", height: "20px" }}
                  className="spinner"
                ></div>{" "}
                Wait...
              </>
            ) : (
              <>
                Logout <ArrowRight size={20} style={{ marginLeft: "4px" }} />
              </>
            )}
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/user-login">Login</NavLink>
          <NavLink to="/user-signup">Signup</NavLink>
        </>
      )}
      <NavLink className="book-btn" to="/book-stylish">
        Book Stylish <MoveRight size={20} style={{ marginLeft: "4px" }} />
      </NavLink>
    </nav>
  );
};

export default Navbar;
