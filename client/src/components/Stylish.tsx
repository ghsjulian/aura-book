import "../styles/stylish.css";
import { NavLink } from "react-router-dom";

const Stylish = () => {
  return (
    <section>
      <div className="stylish-grid-container">
        <div className="grid-title">
          <h3>Aura Beauty & Styling</h3>
          <h1>Our Expert Stylists</h1>
        </div>
        <div className="card-grid">
          <div className="profile-grid-card">
            <div className="card-avatar-wrapper">
              <img
                src="/ghs.png"
                alt="Sophia Bennett"
                className="card-avatar"
              />
              <span
                className="availability-badge"
                title="Available Today"
              ></span>
            </div>
            <h2 className="card-name">Sophia Bennett</h2>
            <span className="card-role">Master Hair Stylist</span>
            <p className="card-desc">
              Specializing in modern balayage, creative cut techniques, and
              precision hair treatments with 8+ years experience.
            </p>
            <div className="card-tags">
              <span className="tag">Hair Color</span>
              <span className="tag">Balayage</span>
              <span className="tag">Cut & Style</span>
            </div>
            <a href="#" className="card-btn">
              Book Consultation
            </a>
          </div>
          <div className="profile-grid-card">
            <div className="card-avatar-wrapper">
              <img src="/ghs.png" alt="Elena Rostova" className="card-avatar" />
              <span
                className="availability-badge"
                title="Available Today"
              ></span>
            </div>
            <h2 className="card-name">Elena Rostova</h2>
            <span className="card-role">Skincare Specialist</span>
            <p className="card-desc">
              Expert in custom facial care, organic skin therapy, and deep
              hydra-treatments for glowing, youthful skin renewal.
            </p>
            <div className="card-tags">
              <span className="tag">Facials</span>
              <span className="tag">Hydra-Care</span>
              <span className="tag">Skin Glow</span>
            </div>
            <a href="#" className="card-btn">
              Book Consultation
            </a>
          </div>
          <div className="profile-grid-card">
            <div className="card-avatar-wrapper">
              <img src="/ghs.png" alt="Clara Miller" className="card-avatar" />
              <span
                className="availability-badge"
                title="Available Today"
              ></span>
            </div>
            <h2 className="card-name">Clara Miller</h2>
            <span className="card-role">Bridal Makeup Artist</span>
            <p className="card-desc">
              Creating flawless HD makeup looks for weddings, galas, and
              high-fashion photo sessions tailored to every skin tone.
            </p>
            <div className="card-tags">
              <span className="tag">Bridal</span>
              <span className="tag">HD Makeup</span>
              <span className="tag">Events</span>
            </div>
            <NavLink to="#" className="card-btn">
              Book Consultation
            </NavLink>
          </div>
          <div className="profile-grid-card">
            <div className="card-avatar-wrapper">
              <img src="/ghs.png" alt="Clara Miller" className="card-avatar" />
              <span
                className="availability-badge"
                title="Available Today"
              ></span>
            </div>
            <h2 className="card-name">Clara Miller</h2>
            <span className="card-role">Bridal Makeup Artist</span>
            <p className="card-desc">
              Creating flawless HD makeup looks for weddings, galas, and
              high-fashion photo sessions tailored to every skin tone.
            </p>
            <div className="card-tags">
              <span className="tag">Bridal</span>
              <span className="tag">HD Makeup</span>
              <span className="tag">Events</span>
            </div>
            <NavLink to="#" className="card-btn">
              Book Consultation
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stylish;
