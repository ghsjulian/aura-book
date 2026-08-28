import { Mail, MapPin, Phone } from "lucide-react";
import "../styles/contact-style.css";

const ContactUS = () => {
  return (
    <section>
      {" "}
      <div className="contact-wrapper">
        <div className="contact-left">
          <div className="header-text">
            <h3>Aura Beauty & Styling</h3>
            <h1>Feel Free To Contact US</h1>
          </div>
          <div className="info-list">
            <div className="info-item">
              <div className="info-label">
                <MapPin size={18} style={{ marginRight: "5px" }} /> Address
              </div>
              <div className="info-value">123 Beauty Lane, Suite 4</div>
            </div>
            <div className="info-item">
              <div className="info-label">
                <Phone size={18} style={{ marginRight: "5px" }} /> Phone
              </div>
              <div className="info-value">+123 456 789</div>
            </div>

            <div className="info-item">
              <div className="info-label">
                <Mail size={18} style={{ marginRight: "5px" }} /> Email
              </div>
              <div className="info-value">support@aurabeauty.com</div>
            </div>
          </div>
          <div className="hours-card">
            <h3>Opening Hours</h3>
            <br />
            <p>
              Monday: 09:00 AM – 08:00 PM <br />
              <br />
              Tuesday: 09:00 AM – 08:00 PM <br />
              <br />
              Wednesday: 09:00 AM – 08:00 PM <br />
              <br />
              Thursday: 09:00 AM – 08:00 PM <br />
              <br />
              Friday: 09:00 AM – 08:00 PM <br />
              <br />
              Saturday: 10:00 AM – 06:00 PM <br />
              <br />
              Sunday: <strong style={{ color: "#f00" }}>Closed</strong>
            </p>
          </div>
        </div>
        <div className="contact-right">
          <form action="#" method="POST">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Consultation Inquiry, General Question..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can our styling team help you today?"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
          <br />
          <br />
          <div
            className="mapouter"
            style={{
              position: "relative",
              textAlign: "right",
              width: "100%",
              height: "430px",
            }}
          >
            <div
              className="gmap_canvas"
              style={{
                overflow: "hidden",
                background: "none",
                width: "100%",
                height: "450px",
              }}
            >
              <iframe
                title="Google Map"
                width="100%"
                height="350px"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?q=Washington%20DC&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
            </div>
            <a
              href="https://norsumediagroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gme-generated-link"
            >
              Embed Map on Website for Free
            </a>
            <style
              dangerouslySetInnerHTML={{
                __html: `
        .mapouter { position: relative; text-align: right; } 
        .gmap_canvas { overflow: hidden; background: none !important; } 
        .gmap_canvas iframe { width: 100%; height: 100%; } 
        .mapouter a { display: block; font-size: 0.85em; text-align: center; padding: 5px 0; color: #6c757d; text-decoration: none; } 
        .gme-generated-link { display: none !important; }
      `,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUS;
