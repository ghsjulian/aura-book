import { NavLink, useNavigate } from "react-router-dom";
import "../styles/forget-password.css";
import { useRef, useState } from "react";
import {
  showMessage,
  validateEmail,
  type ValidationResult,
} from "../utils/validator";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setLoading } from "../store/slices/auth.slice";
import { forgetPassword } from "../services/auth.services";
import type { forgetPasswordResponse } from "../types/auth";

const ForgetPassword = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  const msgRef = useRef<null>(null);
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const handleForm = async (event: any) => {
    event.preventDefault();
    const { isValid, errors }: ValidationResult = validateEmail(email.trim());
    if (!isValid) {
      showMessage(msgRef.current, false, errors[0]);
      return;
    }
    if (isLoading) return;

    dispatch(setLoading(true));
    const { message, success }: forgetPasswordResponse = await forgetPassword(
      email.trim(),
    );

    if (!success) {
      showMessage(msgRef.current, success, message);
      dispatch(setLoading(false));
      return;
    }
    setTimeout(() => {
      dispatch(setLoading(false));
      navigate("/verification-sent");
    }, 1500);
  };
  return (
    <section className="forget-page">
      <div className="page-card">
        <div className="icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
            />
          </svg>
        </div>
        <h2>Forgot Password?</h2>
        <p>
          No worries! Enter your email address below and we'll send you a link
          to reset your password.
        </p>

        <form onSubmit={handleForm}>
          <div ref={msgRef}></div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <button disabled={isLoading} type="submit" className="btn-submit">
            {isLoading ? (
              <>
                <div className="spinner"></div> Processing...
              </>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>

        <NavLink to="/user-login" className="back-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Sign In
        </NavLink>
      </div>
    </section>
  );
};

export default ForgetPassword;
