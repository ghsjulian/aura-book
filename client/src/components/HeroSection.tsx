import React, { useState, useEffect, useCallback } from "react";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Revive Your Natural Aura at Dhaka's Premier Beauty Lounge",
    description:
      "Book professional hair, skin, and makeup services instantly. Experince premium luxury and get the radiant glow you deserve from expert stylists.",
    image: "/hero/hero-5.jpg",
  },
  {
    id: 2,
    title: "Effortless Online Booking for Luxury Salon & Spa Treatments",
    description:
      "Skip the wait. Schedule your appointment with Bangladesh's top beauty professionals in just a few clicks. Your perfect slot is waiting.",
    image: "/hero/hero-6.jpg",
  },
  {
    id: 3,
    title: "Makeup Artists & Hair Stylists Instantly",
    description:
      "From bridal makeovers to everyday glamour, reserve your session with verified beauty experts. Personalized care for your unique style.",
    image: "/hero/hero-2.jpg",
  },
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SLIDES.length - 1 : prevIndex - 1,
    );
  }, []);

  // Auto-play timer (pauses when user hovers over the carousel)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) nextSlide(); // Swipe Left
    if (diff < -50) prevSlide(); // Swipe Right

    setTouchStartX(null);
  };

  return (
    <section
      className="carousel-container"
      id="home"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`slide ${isActive ? "active" : ""}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: isActive ? 1 : 0,
              visibility: isActive ? "visible" : "hidden",
              transform: isActive ? "scale(1)" : "scale(1.05)",
              transition:
                "opacity 0.8s ease-in-out, transform 0.8s ease-in-out, visibility 0.8s",
              backgroundImage: `linear-gradient(180deg, rgba(189, 226, 241, 0.73) 0%, rgba(22, 55, 60, 0.62) 100%), url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="slide-content"
              style={{
                transform: isActive ? "translateY(0)" : "translateY(20px)",
                opacity: isActive ? 1 : 0,
                transition:
                  "transform 0.8s ease-out 0.2s, opacity 0.8s ease-out 0.2s",
              }}
            >
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        );
      })}

      {/* Navigation Buttons */}
      <button
        className="carousel-btn prev-btn"
        id="prevBtn"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        className="carousel-btn next-btn"
        id="nextBtn"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &#10095;
      </button>

      {/* Pagination Indicators */}
      <div
        className="carousel-dots"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 10,
        }}
      >
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: index === currentIndex ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              backgroundColor:
                index === currentIndex ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
