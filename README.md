# ✨ Aura Book

### Modern Beauty & Wellness Appointment Booking Platform

**Aura Book** is a modern, full-stack appointment booking platform designed for beauty salons, spas, makeup artists, stylists, and personal-care businesses.

It provides a centralized experience for **customers, stylists, and administrators** to manage services, appointments, availability, payments, and business operations through a clean and scalable web application.

---

## 🌐 Live Demo

Experience **Aura Book** in action:

<p align="center">

  <a href="https://aura-book-client.netlify.app" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Aura%20Book-8B5CF6?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo" />
  </a>

</p>

> **Try the application:** Explore the booking experience, browse services, select appointments, and experience the Aura Book interface.

### 🔗 Application

**Live Link:** https://aura-book-client.netlify.app

**Source Code:** https://github.com/ghsjulian/aura-book

---

> **Book your time. Choose your style. Experience Aura.**

---

## 🌸 Overview

Aura Book is built around a simple idea:

**Make beauty-service booking as smooth, visual, and reliable as possible.**

Instead of relying on phone calls, messages, or manual appointment books, Aura Book provides a digital booking workflow where customers can:

- Browse available beauty services
- Select preferred services
- Choose a stylist or available professional
- Select an appointment date and time
- Review booking details
- Complete the booking process
- Receive booking confirmation

Meanwhile, stylists and administrators can manage schedules, availability, services, appointments, and business activity from dedicated interfaces.

---

## 🎯 Core Goals

Aura Book is designed to solve common problems in traditional appointment management:

| Problem                        | Aura Book Solution                |
| ------------------------------ | --------------------------------- |
| Manual appointment management  | Centralized digital booking       |
| Double bookings                | Availability-aware booking logic  |
| Difficult service selection    | Visual service-based workflow     |
| Staff scheduling complexity    | Dedicated availability management |
| Lack of business visibility    | Administrative dashboard          |
| Poor customer experience       | Modern responsive interface       |
| Fragmented booking information | Centralized appointment data      |

---

## 🚀 Key Features

### 👩‍💼 Customer Experience

- Browse beauty and wellness services
- View service details and pricing
- Select preferred services
- Choose a stylist or available professional
- Select appointment dates
- Select available time slots
- Review booking information
- Track appointment status
- Receive booking confirmation

### 💇 Stylist Management

Stylists can manage their professional schedule through a dedicated workflow.

- View upcoming appointments
- Manage daily schedules
- Configure availability
- Block unavailable periods
- Manage appointment status
- Track completed appointments

### 🛠️ Admin Management

The administrative layer provides centralized control over the platform.

- Manage services
- Manage staff/stylists
- Manage appointments
- Monitor booking activity
- Control availability
- Review business operations
- Manage platform data

### ⚡ Smart Booking Logic

Aura Book is designed to handle appointment scheduling with availability awareness.

The system can be extended to prevent situations such as:

```text
Customer A
    │
    ├── Selects Stylist
    ├── Selects Date
    └── Selects 04:00 PM
              │
              ▼
        Availability Check
              │
       ┌──────┴──────┐
       │             │
    Available      Booked
       │             │
       ▼             ▼
   Confirm       Reject / Retry
```

This architecture provides a foundation for reliable appointment management and future real-time slot synchronization.

---

# 🏗️ Architecture

Aura Book follows a decoupled full-stack architecture:

```text
                         ┌─────────────────────┐
                         │      CUSTOMER       │
                         │      STYLIST        │
                         │       ADMIN         │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    React Client     │
                         │  TypeScript + Vite  │
                         └──────────┬──────────┘
                                    │
                              HTTP / REST
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Express Server    │
                         │     TypeScript      │
                         └──────────┬──────────┘
                                    │
                  ┌─────────────────┼─────────────────┐
                  │                 │                 │
                  ▼                 ▼                 ▼
             Authentication     Business Logic    Validation
                  │                 │                 │
                  └─────────────────┼─────────────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │      MongoDB        │
                         │      Mongoose       │
                         └─────────────────────┘
```

---

# 🧰 Tech Stack

## Frontend

| Technology         | Purpose                        |
| ------------------ | ------------------------------ |
| **React 19**       | UI development                 |
| **TypeScript**     | Static type safety             |
| **Vite**           | Development & production build |
| **Redux Toolkit**  | Global application state       |
| **TanStack Query** | Server-state management        |
| **React Router**   | Client-side routing            |
| **Axios**          | HTTP communication             |
| **Lucide React**   | Interface icons                |
| **ESLint**         | Code quality                   |

The current frontend package uses React, TypeScript, Vite, Redux Toolkit, TanStack Query, Axios, React Router, and Lucide React.

## Backend

| Technology     | Purpose                   |
| -------------- | ------------------------- |
| **Node.js**    | Runtime                   |
| **Express 5**  | REST API                  |
| **TypeScript** | Type-safe backend         |
| **MongoDB**    | Database                  |
| **Mongoose**   | ODM                       |
| **JWT**        | Authentication            |
| **bcryptjs**   | Password hashing          |
| **Multer**     | File uploads              |
| **Helmet**     | HTTP security             |
| **CORS**       | Cross-origin access       |
| **Morgan**     | HTTP logging              |
| **dotenv**     | Environment configuration |
| **tsx**        | Development runtime       |

These dependencies are reflected in the current server package configuration.

---

# 📁 Project Structure

```text
aura-book/
│
├── client/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── store/
│   │   ├── types/
│   │   └── ...
│   │
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── server/
│   │
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   └── server.ts
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── project-overview.md
└── README.md
```

> The exact internal structure may evolve as the application grows. The repository currently separates the application into `client` and `server` projects.

---

# ⚙️ Getting Started

## Prerequisites

Make sure you have the following installed:

- **Node.js**
- **npm**
- **MongoDB**
- **Git**

---

## 📥 Clone Repository

```bash
git clone https://github.com/ghsjulian/aura-book.git

cd aura-book
```

---

# 🎨 Frontend Setup

Navigate to the client:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the production application:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

The frontend uses Vite for development and production builds.

---

# 🖥️ Backend Setup

Open another terminal:

```bash
cd aura-book/server
```

Install dependencies:

```bash
npm install
```

Create your environment configuration:

```bash
touch .env
```

Example:

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017
DB_NAME=aura_book

JWT_SECRET=your_super_secret_key

CLIENT_URL=http://localhost:5173
```

Start the development server:

```bash
npm run dev
```

Build the backend:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The backend currently exposes separate development, build, and production start scripts.

---

# 🔐 Environment Variables

Never commit secrets to Git.

Recommended environment variables include:

```env
PORT=
MONGO_URI=
DB_NAME=
JWT_SECRET=
CLIENT_URL=
```

For production deployments, use your hosting provider's environment-variable management instead of committing `.env` files.

---

# 🔄 Application Flow

```text
                    ┌───────────────┐
                    │    Visitor    │
                    └───────┬───────┘
                            │
                            ▼
                    Browse Services
                            │
                            ▼
                    Select Service
                            │
                            ▼
                    Choose Stylist
                            │
                            ▼
                    Choose Date/Time
                            │
                            ▼
                    Check Availability
                            │
                       ┌────┴────┐
                       │         │
                   Available   Unavailable
                       │         │
                       ▼         └──────► Choose Again
                  Create Booking
                       │
                       ▼
                Booking Confirmation
                       │
                       ▼
                  Appointment
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
         Stylist View         Admin View
             │                   │
             └─────────┬─────────┘
                       ▼
                Manage Appointment
```

---

# 🧠 Future Roadmap

Aura Book is designed to evolve into a complete commercial booking platform.

Potential future improvements include:

### Real-Time Booking

- Socket.IO integration
- Live slot locking
- Instant availability updates
- Real-time booking notifications

### Payments

- Stripe integration
- Local payment gateways
- Advance/deposit payments
- Payment verification
- Refund management

### Notifications

- Email confirmations
- SMS reminders
- Appointment reminders
- Booking status notifications

### Advanced Scheduling

- Recurring availability
- Staff breaks
- Holidays
- Time-off management
- Service-specific availability
- Conflict detection

### Business Intelligence

- Revenue analytics
- Booking statistics
- Popular services
- Stylist performance
- Customer insights
- Monthly reports

### Customer Features

- Customer profiles
- Booking history
- Favorite stylists
- Reviews & ratings
- Digital receipts
- QR-based appointment verification

---

# 🔒 Security

Security is an important part of the backend architecture.

Aura Book uses technologies and practices including:

- JWT-based authentication
- Password hashing with bcrypt
- HTTP security headers with Helmet
- CORS configuration
- Environment-based secrets
- Request validation
- Secure cookie/token strategies where applicable
- MongoDB/Mongoose schema validation

Production deployments should additionally use:

- HTTPS
- Secure cookies
- Rate limiting
- Strict CORS policies
- Strong JWT secrets
- Input sanitization
- Database access restrictions
- Proper secret management

---

# 📊 Scalability

The architecture is intentionally separated into frontend and backend applications, allowing each layer to evolve independently.

```text
                  ┌─────────────────────┐
                  │      CDN / Proxy    │
                  └──────────┬──────────┘
                             │
                    ┌────────┴────────┐
                    ▼                 ▼
              React Client       API Server
                                      │
                           ┌──────────┼──────────┐
                           ▼          ▼          ▼
                        MongoDB    Cache      Workers
                                      │
                                      ▼
                                  Services
```

This makes it possible to introduce Redis, background workers, WebSockets, queues, and horizontal API scaling as the platform grows.

---

# 🧪 Development Philosophy

Aura Book aims to maintain:

- Strong TypeScript typing
- Clear separation of concerns
- Reusable React components
- Predictable state management
- Modular backend architecture
- Secure authentication
- Maintainable API design
- Production-oriented development practices

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

### 1. Fork the repository

```bash
git fork https://github.com/ghsjulian/aura-book
```

### 2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

### 3. Commit your changes

```bash
git add .
git commit -m "feat: add your feature"
```

### 4. Push your branch

```bash
git push origin feature/your-feature
```

### 5. Open a Pull Request

Please keep pull requests focused, descriptive, and easy to review.

---

# 📜 License

This project currently uses the license configuration defined in the individual project packages.

Before commercial distribution, a dedicated root-level license should be added to clearly define usage, modification, and distribution rights.

---

# 👨‍💻 Author

**Ghs Julian**

Full Stack Web Developer

GitHub:  
https://github.com/ghsjulian

---

# ⭐ Support

If you find Aura Book useful or interesting, consider giving the repository a ⭐ on GitHub.

It helps support the project and encourages further development.

---

<div align="center">

### ✨ Aura Book

**Beautiful bookings. Smarter scheduling. Better experiences.**

Built with ❤️ using React, TypeScript, Node.js, Express & MongoDB.

**[GitHub Repository](https://github.com/ghsjulian/aura-book)**

</div>
