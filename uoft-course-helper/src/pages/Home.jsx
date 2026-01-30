import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import photoOne from "../assets/uoft-1.png";
import photoTwo from "../assets/uoft-2.png";
import photoThree from "../assets/uoft-3.png";

export default function Home() {
  const photos = [
    { src: photoOne, alt: "Snowy campus path with trees" },
    { src: photoTwo, alt: "Campus view through a window at sunset" },
    { src: photoThree, alt: "Historic U of T building in snow" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("next");
      setActiveIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="page">
      <header className="header header-sky">
        <div className="header-inner">
          <div className="hero hero-centered">
            <p className="hero-kicker">Welcome to U of T</p>
            <h1 className="title">U of T Course Helper</h1>
          </div>
          <Navbar />
          <div className="search-section">
            <SearchBar />
          </div>
        </div>
      </header>
      <main className="main">
        <div className="home-content">
          <section className="announcements">
            <h2 className="section-title">Latest announcements</h2>
            <ul className="list">
              <li className="list-item">Course enrollment opens next Monday.</li>
              <li className="list-item">New comments feature is in preview.</li>
              <li className="list-item">Search now supports instructor names.</li>
            </ul>
          </section>
          <section className="photo-rail" aria-label="Campus photos">
            <div className="photo-frame">
              <button
                className="photo-arrow left"
                type="button"
                aria-label="Previous photo"
                onClick={() => {
                  setDirection("prev");
                  setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
                }}
              >
                ‹
              </button>
              <div
                className={`photo-slide ${direction === "next" ? "slide-next" : "slide-prev"}`}
                key={photos[activeIndex].src}
              >
                <img
                  className="photo-img"
                  src={photos[activeIndex].src}
                  alt={photos[activeIndex].alt}
                />
              </div>
              <button
                className="photo-arrow right"
                type="button"
                aria-label="Next photo"
                onClick={() => {
                  setDirection("next");
                  setActiveIndex((prev) => (prev + 1) % photos.length);
                }}
              >
                ›
              </button>
            </div>
            <div className="photo-dots" aria-hidden="true">
              {photos.map((_, idx) => (
                <span
                  key={idx}
                  className={`photo-dot ${idx === activeIndex ? "is-active" : ""}`}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
