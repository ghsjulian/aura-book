import "../styles/user-profile.css";

const UserProfile = () => {
  return (
    <section className="profile-page">
      <div className="profile-wrapper">
        <div className="profile-left">
          <div className="avatar-container">
            <img src="/ghs.png" alt="User Profile" className="avatar-img" />
            <span className="status-badge" title="Active Account"></span>
          </div>
          <h2 className="user-name">Ghs Julian</h2>

          <div className="info-list">
            <div className="info-item">
              <div className="info-label">Email Address</div>
              <div className="info-value">ghsjulian@gmail.com</div>
            </div>
            <div className="info-item">
              <div className="info-label">Phone</div>
              <div className="info-value">+123 456 789</div>
            </div>
            <div className="info-item">
              <div className="info-label">Gender</div>
              <div className="info-value">Female</div>
            </div>
            <div className="info-item">
              <div className="info-label">Location</div>
              <div className="info-value">123 Beauty Lane, Suite 4</div>
            </div>
            <div className="info-item">
              <div className="info-label">Member Since</div>
              <div className="info-value">January 2024</div>
            </div>
          </div>

          <a href="#" className="edit-btn">
            Edit Profile
          </a>
        </div>
        <div className="profile-right">
          <div className="stats-container">
            <div className="stat-box">
              <div className="stat-number">12</div>
              <div className="stat-label">Total Bookings</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">2</div>
              <div className="stat-label">Upcoming</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">10</div>
              <div className="stat-label">Completed</div>
            </div>
          </div>
          <div className="history-list">
            <div className="section-title">Upcoming Appointments</div>
            <div className="booking-list">
              <div className="booking-item">
                <div className="booking-info">
                  <h4>Skincare Consultation</h4>
                  <p>📅 Sep 05, 2026 — 02:30 PM</p>
                </div>
                <span className="status-tag status-upcoming">Upcoming</span>
              </div>
              <div className="booking-item">
                <div className="booking-info">
                  <h4>Hair Styling & Care</h4>
                  <p>📅 Sep 12, 2026 — 11:00 AM</p>
                </div>
                <span className="status-tag status-upcoming">Upcoming</span>
              </div>
            </div>
            <div className="section-title">Pending Appintemnts </div>
            <div className="booking-list">
              <div className="booking-item">
                <div className="booking-info">
                  <h4>Skincare Consultation</h4>
                  <p>📅 Sep 05, 2026 — 02:30 PM</p>
                </div>
                <span className="status-tag status-pending">Pending</span>
              </div>
              <div className="booking-item">
                <div className="booking-info">
                  <h4>Hair Styling & Care</h4>
                  <p>📅 Sep 12, 2026 — 11:00 AM</p>
                </div>
                <span className="status-tag status-pending">Pending</span>
              </div>
            </div>
            <div className="section-title">Recent Booking History</div>
            <div className="booking-list">
              <div className="booking-item">
                <div className="booking-info">
                  <h4>Professional Makeup</h4>
                  <p>📅 Aug 14, 2026 • $85.00</p>
                </div>
                <span className="status-tag status-completed">Completed</span>
              </div>
              <div className="booking-item">
                <div className="booking-info">
                  <h4>Bridal Spa Package</h4>
                  <p>📅 Jul 20, 2026 • $150.00</p>
                </div>
                <span className="status-tag status-completed">Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
