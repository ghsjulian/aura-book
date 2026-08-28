import "../styles/about-style.css";

const AboutUS = () => {
  return (
    <section>
      {" "}
      <div className="about-wrapper">
        <div className="about-left">
          <div className="header-text">
            <h3>Aura Story</h3>
            <h1>About Our Studio</h1>
          </div>
          <div className="highlight-card">
            <h4>Our Philosophy</h4>
            <p>
              Enhancing your natural radiance through tailored care, specialized
              styling, and premium holistic beauty treatments.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2.5k</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Expert Stylists</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9★</div>
              <div className="stat-label">Client Rating</div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <p className="story-paragraph">
            Founded with a vision to revolutionize personal styling and skin
            wellness, <strong>Aura Beauty & Styling</strong> provides an
            unparalleled aesthetic experience. We combine modern artistry with
            individual client consultations to ensure every visit leaves you
            renewed and confident.
          </p>
          <div className="section-title">Our Core Commitments</div>
          <div className="values-list">
            <div className="value-item">
              <h5>✨ Personalize Consultations</h5>
              <p>
                Every skin type and hair structure is unique. We craft
                personalized solutions tailored strictly to your preferences.
              </p>
            </div>

            <div className="value-item">
              <h5>🌿 Organic & Safe Products</h5>
              <p>
                We strictly utilize dermatologically tested, cruelty-free, and
                organic products across all our treatment sessions.
              </p>
            </div>

            <div className="value-item">
              <h5>✂️ Certified Master Artists</h5>
              <p>
                Our team consists of industry-certified stylists and skincare
                professionals continuously trained in modern trends.
              </p>
            </div>
          </div>

          {/* <NavLink to="#" className="booking-cta-btn">
            Book Your Consultation
          </NavLink> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
