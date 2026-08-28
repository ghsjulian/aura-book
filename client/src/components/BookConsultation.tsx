import { X } from "lucide-react";
import "../styles/book-consultion.css";
import { useAppDispatch } from "../store/hooks";
import { setBooking } from "../store/slices/auth.slice";

const BookConsultation = () => {
  const dispatch = useAppDispatch();

  return (
    <section className="book-page">
      <div className="booking-card">
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(setBooking());
          }}
          className="close-booking"
        >
          <X size={23} />
        </button>
        <div className="header-text">
          <h3>Aura Beauty & Styling</h3>
          <h1>Book a Consultation</h1>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Jane Doe"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jane@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+123 456 789"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="service">Select Service</label>
            <select id="service" name="service" required>
              <option value="" disabled selected>
                Choose a service...
              </option>
              <option value="hair-styling">Hair Styling & Care</option>
              <option value="skin-treatment">Skincare Consultation</option>
              <option value="makeup-session">Professional Makeup</option>
              <option value="bridal-package">Bridal Package</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input type="date" id="date" name="date" />
            </div>
            <div className="form-group">
              <label htmlFor="time">Preferred Time</label>
              <input type="time" id="time" name="time" />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookConsultation;
