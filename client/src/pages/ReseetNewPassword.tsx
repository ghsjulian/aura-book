import { NavLink, useNavigate } from "react-router-dom";
import "../styles/password-reset.css";
import { useEffect, useRef, useState } from "react";
import { EyeOff } from "lucide-react";
import {
  showMessage,
  validatePassword,
  type ValidationResult,
} from "../utils/validator";
import { resetNewPass } from "../services/auth.services";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { forgetPasswordResponse } from "../types/auth";
import { setLoading } from "../store/slices/auth.slice";

const ReseetNewPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token: string | null = searchParams.get("token") || "";
  const [password, setPassword] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const msgRef = useRef<null>(null);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  const handleForm = async (event: any) => {
    event.preventDefault();
    const { isValid, errors }: ValidationResult = validatePassword(
      password.trim(),
    );
    if (!isValid) {
      showMessage(msgRef.current, isValid, errors[0]);
      return;
    }
    if (!confirmPass) {
      showMessage(msgRef.current, false, "Confirm password required");
      return;
    }
    if (password.trim() !== confirmPass.trim()) {
      showMessage(msgRef.current, false, "Confirm password doesn't matched");
      return;
    }
    dispatch(setLoading(true));
    const { success, message }: forgetPasswordResponse = await resetNewPass(
      password.trim(),
      token,
    );

    if (!success) {
      dispatch(setLoading(false));
      showMessage(msgRef.current, success, message);
      return;
    }

    dispatch(setLoading(false));
    showMessage(msgRef.current, success, message);
    setTimeout(() => {
      navigate("/user-login");
    }, 2000);
  };

  useEffect(() => {
    if (!token) {
      navigate(-1);
    }
  }, []);

  return (
    <section className="forget-page">
      <div className="password-card">
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
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
        </div>

        <h2>Set New Password</h2>
        <p>
          Your new password must be different from previously used passwords.
        </p>

        <form onSubmit={handleForm}>
          <div ref={msgRef}></div>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="toggle-password"
              >
                {showPassword ? (
                  <EyeOff />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                name="confirm-password"
                placeholder="••••••••"
                onChange={(e) => setConfirmPass(e.target.value)}
                value={confirmPass}
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                type="button"
                className="toggle-password"
              >
                {showConfirmPassword ? (
                  <EyeOff />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            disabled={isLoading}
            type="submit"
            className="btn-submit"
          >
            {isLoading ? (
              <>
                <div className="spinner"></div> Processing...
              </>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>

        <NavLink to="/user-login" className="back-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Sign In
        </NavLink>
      </div>
    </section>
  );
};

export default ReseetNewPassword;
