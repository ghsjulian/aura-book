import { NavLink } from "react-router-dom";

const EmailSent = () => {
  return (
    <section className="forget-page">
      <div className="page-card">
        <div className="icon-container">
          <div className="icon-bg"></div>
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
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </div>
        </div>
        <h2>Check Your Inbox</h2>
        <div style={{ margin: ".5rem auto", fontSize: "20px" }}>
          We've sent a password reset link to your email address
        </div>
        <p>
          Please click the link inside to set up a new password. The link will
          expire in 15 minutes.
        </p>
        <div className="resend-text">
          Didn't receive the email?
          <NavLink
            style={{
              textDecoration: "none",
              margin: "auto .3rem",
              color: "#0665d8",
              fontWeight: 900,
            }}
            to="/forget-password"
            className="resend-link"
          >
            Click to resend
          </NavLink>
        </div>
        <div>
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
      </div>
    </section>
  );
};

export default EmailSent;
