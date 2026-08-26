import React from "react";
import "../styles/service.style.css";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Bridal Makeup",
    description:
      "Complete luxury makeover tailored for your special day, including HD airbrushing, trial sessions, and setting for lasting glow.",
    image: "/services/service-1.jpg",
  },
  {
    id: 2,
    title: "Glam & Party Glam",
    description:
      "Stunning makeup looks designed for red carpets, evening events, receptions, and photoshoot glam sessions.",
    image: "/services/service-2.jpg",
  },
  {
    id: 3,
    title: "Outfit & Couture Styling",
    description:
      "Professional wardrobe curation, color palette matching, and draping services to complement your overall aesthetic.",
    image: "/services/service-3.jpg",
  },
  {
    id: 4,
    title: "Hair Artistry",
    description:
      "From elegant updos and romantic waves to sleek modern hair transformations tailored to your face shape.",
    image: "/services/service-4.jpg",
  },
  {
    id: 5,
    title: "Pre-Makeup Skin Care",
    description:
      "Hydrating and pore-refining facial preparations that ensure a smooth canvas and seamless makeup application.",
    image: "/services/service-5.jpg",
  },
  {
    id: 6,
    title: "Personal Style Consult",
    description:
      "One-on-one consultation for women looking to discover their signature makeup style, outfit silhouette, and daily wear routine.",
    image: "/services/service-6.jpg",
  },
  {
    id: 7,
    title: "Saree & Dupatta Draping",
    description:
      "Expert traditional and modern sari draping, pleating, and secure pinning for effortless elegance.",
    image: "/services/service-7.jpg",
  },
  {
    id: 8,
    title: "Celebrity & Editorial Makeup",
    description:
      "High-definition camera-ready makeup optimized for studio lighting, fashion shoots, and high-profile events.",
    image: "/services/service-8.jpg",
  },
  {
    id: 9,
    title: "Nail Art & Manicure",
    description:
      "Custom nail extension designs, gel polish finishes, and restorative hand treatments to complement your look.",
    image: "/services/service-9.jpg",
  },
  {
    id: 10,
    title: "Eye Makeup Special",
    description:
      "Detailed eye transformations ranging from soft romantic cuts to dramatic smoky looks and custom lash application.",
    image: "/services/service-10.jpg",
  },
  {
    id: 11,
    title: "Mehendi & Henna Art",
    description:
      "Intricate bridal and celebratory henna artistry featuring traditional motifs or modern minimalist aesthetics.",
    image: "/services/service-11.jpg",
  },
  {
    id: 12,
    title: "Group & Bridesmaid Glam",
    description:
      "Coordinated makeup and styling packages for bridal parties, family members, and group events.",
    image: "/services/service-12.jpg",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="section-header">
        <span className="tagline">Aura Beauty & Styling</span>
        <h2>Exclusive Services</h2>
        <p>
          Enhance your natural beauty and embrace personalized elegance with our
          tailored makeup, hair, and outfit consultations.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="card-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link || "#"} className="book-btn">
                Book Appointment
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
