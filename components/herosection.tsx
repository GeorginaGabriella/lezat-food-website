"use client";

import Carousel from "react-bootstrap/Carousel";

const HeroSection = () => {
  const slides = [
    { imageUrl: "/images/fastfood.jpg", alt: "Menu fast food" },
    { imageUrl: "/images/pizza.jpg", alt: "Pizza lezat" },
    { imageUrl: "/images/ricebowl.jpg", alt: "Rice bowl" },
    { imageUrl: "/images/platter.jpg", alt: "Hidangan spesial" },
  ];

  return (
    <section className="hero-section">
      <div className="hero-heading">
        <span className="hero-label">WELCOME TO LEZAT FOOD</span>
        <h1>
          Nikmati Makanan <span>Favoritmu!</span>
        </h1>
        <p>
          Berbagai pilihan hidangan lezat siap menemani setiap momen spesialmu.
          Pesan makanan favorit dengan mudah di LEZAT FOOD.
        </p>
      </div>

      <div className="hero-carousel">
        <Carousel
          fade
          interval={3000}
          controls
          indicators
          pause={false}
          wrap={true}
          slide={true}
        >
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div
                className="hero-slide"
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                }}
                role="img"
                aria-label={slide.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
