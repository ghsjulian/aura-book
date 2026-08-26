import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4 style={{ fontSize: "1.4rem", fontWeight: 800 }}>GlowBook</h4>
          <p>
            Modern & elegant booking solution for world-class beauty lounges.For
            more info please visit our stylish page and select your favourite
            needs. Our services is your solutions.Or subscribe us to get updates
            from our platform.
          </p>
        </div>
        <div className="footer-col">
          <h4 style={{ fontSize: "1.4rem", fontWeight: 800 }}>
            Quick Navigation
          </h4>
          <ul>
            <li>
              <NavLink to="#services">Our Services</NavLink>
            </li>
            <li>
              <NavLink to="#stylists">Top Stylists</NavLink>
            </li>
            <li>
              <NavLink to="#booking">Reserve Appointment</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{ fontSize: "1.4rem", fontWeight: 800 }}>
            Support & Contact
          </h4>
          <ul>
            <li>Email: hello@glowbook.com</li>
            <li>Phone: +880 1234 567890</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          &copy; 2026 Aura Book Lounge. All Rights Reserved.
        </p>
        <p className="made-with">
          Made with <span className="heart">❤️</span>
        </p>
        <strong className="developer">
          Developed By :{" "}
          <NavLink to="https://ghsresume.netlify.app" target="_blank">
            Ghs Julian
          </NavLink>
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
