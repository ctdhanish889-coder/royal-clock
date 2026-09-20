import { useEffect, useRef, useState } from "react";
import "./styles.css";
import newYorkImage from "./assets/cities/new-york.jpg";
import londonImage from "./assets/cities/london.jpg";
import parisImage from "./assets/cities/paris.jpg";
import dubaiImage from "./assets/cities/dubai.jpg";
import delhiImage from "./assets/cities/new-delhi.jpg";
import tokyoImage from "./assets/cities/tokyo.jpg";
import genevaImage from "./assets/cities/geneva.jpg";

const cities = [
  {
    name: "New York",
    country: "United States",
    timezone: "America/New_York",
    code: "NYC",
    description: "Where modern ambition meets timeless precision.",
    theme: "new-york",
    landmark: "SKYLINE",
     image: newYorkImage,
  },
  {
    name: "London",
    country: "United Kingdom",
    timezone: "Europe/London",
    code: "LON",
    description: "A city shaped by heritage, craft and tradition.",
    theme: "london",
    landmark: "CLOCK TOWER",
     image: londonImage,
  },
  {
    name: "Paris",
    country: "France",
    timezone: "Europe/Paris",
    code: "PAR",
    description: "Elegance measured in every passing second.",
    theme: "paris",
    landmark: "THE CITY OF LIGHT",
     image: parisImage,
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    timezone: "Asia/Dubai",
    code: "DXB",
    description: "Where ambition rises beyond the horizon.",
    theme: "dubai",
    landmark: "THE HORIZON",
    image: dubaiImage,
  },
  {
    name: "New Delhi",
    country: "India",
    timezone: "Asia/Kolkata",
    code: "DEL",
    description: "Ancient heritage and modern time, together.",
    theme: "delhi",
    landmark: "ROYAL HERITAGE",
    image: delhiImage,
  },
  {
    name: "Tokyo",
    country: "Japan",
    timezone: "Asia/Tokyo",
    code: "TYO",
    description: "Precision, discipline and extraordinary detail.",
    theme: "tokyo",
    landmark: "PRECISION CITY",
    image: tokyoImage,
  },
  {
    name: "Geneva",
    country: "Switzerland",
    timezone: "Europe/Zurich",
    code: "GVA",
    description: "The heart of traditional Swiss horology.",
    theme: "geneva",
    landmark: "THE HOROLOGY CAPITAL",
     image: genevaImage,
  },
];

function getTimeParts(timezone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).formatToParts(new Date());

  const values = {};

  parts.forEach((part) => {
    if (part.type !== "literal") {
      values[part.type] = Number(part.value);
    }
  });

  return values;
}

function formatTime(timezone) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

function formatDate(timezone) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());
}

function CityLandmark({ theme }) {
  return (
    <div className={`landmark landmark-${theme}`}>
      {theme === "paris" && (
        <div className="eiffel">
          <div className="eiffel-top"></div>
          <div className="eiffel-body"></div>
          <div className="eiffel-leg left"></div>
          <div className="eiffel-leg right"></div>
          <div className="eiffel-platform"></div>
        </div>
      )}

      {theme === "london" && (
        <div className="big-ben">
          <div className="tower-spire"></div>
          <div className="tower-roof"></div>
          <div className="tower-body">
            <div className="tower-clock">
              <span className="tower-hour"></span>
              <span className="tower-minute"></span>
              <span className="tower-center"></span>
            </div>
          </div>
        </div>
      )}

      {theme === "dubai" && (
        <div className="dubai-tower">
          <div className="dubai-spire"></div>
          <div className="dubai-body"></div>
        </div>
      )}

      {theme === "tokyo" && (
        <div className="tokyo-tower">
          <div className="tokyo-tip"></div>
          <div className="tokyo-frame"></div>
          <div className="tokyo-base"></div>
        </div>
      )}

      {theme === "delhi" && (
        <div className="delhi-monument">
          <div className="delhi-dome"></div>
          <div className="delhi-building"></div>
          <div className="delhi-arch"></div>
        </div>
      )}

      {theme === "geneva" && (
        <div className="geneva-mountains">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {theme === "new-york" && (
        <div className="ny-skyline">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
}

/* =========================================
   PHASE 3 — CITY CLOCK SYSTEM
   ========================================= */

function CityClock({ city, timeParts }) {
  const hour = timeParts?.hour ?? 0;
  const minute = timeParts?.minute ?? 0;
  const second = timeParts?.second ?? 0;

  const hourAngle = ((hour % 12) * 30) + (minute * 0.5);
  const minuteAngle = minute * 6;
  const secondAngle = second * 6;

  return (
    <div className={`city-clock city-clock-${city.theme}`}>

      {/* NEW YORK — MODERN */}
      {city.theme === "new-york" && (
        <div className="clock-modern">
          <div className="clock-modern-ring">
            <div
              className="clock-hand clock-hour"
              style={{ transform: `rotate(${hourAngle}deg)` }}
            />
            <div
              className="clock-hand clock-minute"
              style={{ transform: `rotate(${minuteAngle}deg)` }}
            />
            <div
              className="clock-hand clock-second"
              style={{ transform: `rotate(${secondAngle}deg)` }}
            />
            <div className="clock-center" />
          </div>
        </div>
      )}

      {/* LONDON — CLASSIC */}
      {city.theme === "london" && (
        <div className="clock-classic">
          <div className="classic-inner">
            <span className="roman roman-xii">XII</span>
            <span className="roman roman-iii">III</span>
            <span className="roman roman-vi">VI</span>
            <span className="roman roman-ix">IX</span>

            <div
              className="clock-hand classic-hour"
              style={{ transform: `rotate(${hourAngle}deg)` }}
            />
            <div
              className="clock-hand classic-minute"
              style={{ transform: `rotate(${minuteAngle}deg)` }}
            />
            <div className="clock-center" />
          </div>
        </div>
      )}

      {/* PARIS — ELEGANT */}
      {city.theme === "paris" && (
        <div className="clock-paris">
          <div className="paris-ring">
            <div className="paris-dial">
              <div
                className="clock-hand paris-hour"
                style={{ transform: `rotate(${hourAngle}deg)` }}
              />
              <div
                className="clock-hand paris-minute"
                style={{ transform: `rotate(${minuteAngle}deg)` }}
              />
              <div className="clock-center" />
            </div>
          </div>
        </div>
      )}

      {/* DUBAI — LUXURY */}
      {city.theme === "dubai" && (
        <div className="clock-dubai">
          <div className="dubai-core">
            <div className="dubai-marker top" />
            <div className="dubai-marker right" />
            <div className="dubai-marker bottom" />
            <div className="dubai-marker left" />

            <div
              className="clock-hand dubai-hour"
              style={{ transform: `rotate(${hourAngle}deg)` }}
            />
            <div
              className="clock-hand dubai-minute"
              style={{ transform: `rotate(${minuteAngle}deg)` }}
            />
            <div className="clock-center" />
          </div>
        </div>
      )}

      {/* NEW DELHI — ORNAMENTAL */}
      {city.theme === "delhi" && (
        <div className="clock-delhi">
          <div className="delhi-ornament">
            <div className="delhi-dial">
              <div
                className="clock-hand delhi-hour"
                style={{ transform: `rotate(${hourAngle}deg)` }}
              />
              <div
                className="clock-hand delhi-minute"
                style={{ transform: `rotate(${minuteAngle}deg)` }}
              />
              <div className="clock-center" />
            </div>
          </div>
        </div>
      )}

      {/* TOKYO — MINIMAL */}
      {city.theme === "tokyo" && (
        <div className="clock-tokyo">
          <div className="tokyo-dial">
            <span className="tokyo-marker marker-12" />
            <span className="tokyo-marker marker-3" />
            <span className="tokyo-marker marker-6" />
            <span className="tokyo-marker marker-9" />

            <div
              className="clock-hand tokyo-hour"
              style={{ transform: `rotate(${hourAngle}deg)` }}
            />
            <div
              className="clock-hand tokyo-minute"
              style={{ transform: `rotate(${minuteAngle}deg)` }}
            />
            <div className="clock-center" />
          </div>
        </div>
      )}

      {/* GENEVA — SWISS PRECISION */}
      {city.theme === "geneva" && (
        <div className="clock-geneva">
          <div className="geneva-dial">
            <div className="geneva-cross horizontal" />
            <div className="geneva-cross vertical" />

            <div
              className="clock-hand geneva-hour"
              style={{ transform: `rotate(${hourAngle}deg)` }}
            />
            <div
              className="clock-hand geneva-minute"
              style={{ transform: `rotate(${minuteAngle}deg)` }}
            />
            <div className="clock-center" />
          </div>
        </div>
      )}

    </div>
  );
}
function App() {
  const [selectedCity, setSelectedCity] = useState(0);
  const [time, setTime] = useState(formatTime(cities[0].timezone));
  const [showCollection, setShowCollection] = useState(false);

  const touchStartX = useRef(null);

  const city = cities[selectedCity];
  useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (ticking) return;

    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY;

      document.documentElement.style.setProperty(
        "--scroll-y",
        `${scrollY}`
      );

      ticking = false;
    });

    ticking = true;
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  useEffect(() => {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  const handleMouseMove = (event) => {
    targetX = (event.clientX / window.innerWidth - 0.5) * 2;
    targetY = (event.clientY / window.innerHeight - 0.5) * 2;
  };

  const animate = () => {
    currentX += (targetX - currentX) * 0.04;
    currentY += (targetY - currentY) * 0.04;

    document.documentElement.style.setProperty(
      "--mouse-x",
      `${currentX}`
    );

    document.documentElement.style.setProperty(
      "--mouse-y",
      `${currentY}`
    );

    requestAnimationFrame(animate);
  };

  window.addEventListener("mousemove", handleMouseMove);

  const animationFrame = requestAnimationFrame(animate);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    cancelAnimationFrame(animationFrame);
  };
}, []);
  useEffect(() => {
  const elements = document.querySelectorAll(
    ".heritage"
  );

  elements.forEach((element) => {
    element.classList.add("scroll-reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    observer.disconnect();
  };
}, []);
useEffect(() => {
  const starCount = window.innerWidth < 768 ? 18 : 32;

  const stars = [];

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");

    star.className =
      i % 7 === 0
        ? "royal-star large"
        : "royal-star";

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    star.style.setProperty(
      "--star-duration",
      `${3 + Math.random() * 5}s`
    );

    star.style.setProperty(
      "--star-delay",
      `${Math.random() * 5}s`
    );

    document.body.appendChild(star);
    stars.push(star);
  }

  return () => {
    stars.forEach((star) => star.remove());
  };
}, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatTime(city.timezone));
    }, 1000);

    return () => clearInterval(timer);
  }, [city.timezone]);

  useEffect(() => {
    setTime(formatTime(city.timezone));
  }, [city.timezone]);

  function handleTouchStart(event) {
  const touch = event.touches[0];
  event.currentTarget.dataset.touchStartX = touch.clientX;
}

function handleMouseDown(event) {
  const scene = event.currentTarget;
  const startX = event.clientX;

  scene.style.transition = "none";

  const handleMouseMove = (moveEvent) => {
    const distance = moveEvent.clientX - startX;

    const limitedDistance = Math.max(
      -140,
      Math.min(140, distance)
    );

    scene.style.transform = `translateX(${limitedDistance}px)`;
  };

  const handleMouseUp = (upEvent) => {
    const distance = upEvent.clientX - startX;

    scene.style.transition =
      "transform 320ms cubic-bezier(0.22, 0.61, 0.36, 1)";

    scene.style.transform = "translateX(0)";

    if (Math.abs(distance) >= 60) {
      if (distance < 0) {
        nextCity();
      } else {
        previousCity();
      }
    }

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
}
  function nextCity() {
  document.body.classList.remove(
    "city-travel-forward",
    "city-travel-backward"
  );

  // Force the browser to restart the transition
  void document.body.offsetWidth;

  document.body.classList.add("city-travel-forward");

  setSelectedCity((current) => (current + 1) % cities.length);

  window.setTimeout(() => {
    document.body.classList.remove("city-travel-forward");
  }, 1200);
}
  function previousCity() {
  document.body.classList.remove(
    "city-travel-forward",
    "city-travel-backward"
  );

  // Force the browser to restart the transition
  void document.body.offsetWidth;

  document.body.classList.add("city-travel-backward");

  setSelectedCity(
    (current) => (current - 1 + cities.length) % cities.length
  );

  window.setTimeout(() => {
    document.body.classList.remove("city-travel-backward");
  }, 1200);
}

  function handleTouchStart(event) {
  const scene = event.currentTarget;
  const touch = event.touches[0];
  const startX = touch.clientX;

  scene.dataset.touchStartX = startX;
  scene.style.transition = "none";
}

  function handleTouchEnd(event) {
  const scene = event.currentTarget;

  const startX = Number(scene.dataset.touchStartX);
  const endX = event.changedTouches[0].clientX;

  const distance = endX - startX;

  scene.style.transition =
    "transform 320ms cubic-bezier(0.22, 0.61, 0.36, 1)";

  scene.style.transform = "translateX(0)";

  if (Math.abs(distance) < 60) {
    return;
  }

  if (distance < 0) {
    nextCity();
  } else {
    previousCity();
  }
}

  function enterCollection() {
  setShowCollection(false);

  window.setTimeout(() => {
    setShowCollection(true);

    window.setTimeout(() => {
      const collection = document.getElementById("collection");

      if (collection) {
        collection.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 30);
  }, 30);
}

  const clockParts = getTimeParts(city.timezone);

  const hourAngle =
    ((clockParts.hour % 12) * 30) +
    clockParts.minute * 0.5;

  const minuteAngle =
    clockParts.minute * 6 +
    clockParts.second * 0.1;

  const secondAngle = clockParts.second * 6;

  return (
    <main className="site">

      <nav className="navbar">
        <div className="brand-mark">
          <span className="brand-symbol">R</span>
          <span>ROYAL HOROLOGY</span>
        </div>

        <div className="nav-links">
          <button
            onClick={() =>
              document
                .getElementById("journey")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            JOURNEY
          </button>

          <button
            onClick={() =>
              document
                .getElementById("collection")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            COLLECTION
          </button>

          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            HERITAGE
          </button>
        </div>

        <button className="menu-button">MENU</button>
      </nav>

      {/* HERO */}

      <section className="hero">
        <div className="hero-background">
          <div className="orb orb-one"></div>
          <div className="orb orb-two"></div>
          <div className="architectural-line line-one"></div>
          <div className="architectural-line line-two"></div>
        </div>

        <div className="hero-content">
          <p className="eyebrow">
            EST. 1897 · MASTER HOROLOGY
          </p>

          <h1>
            TIME,
            <br />
            <span>CRAFTED.</span>
          </h1>

          <p className="hero-description">
            Discover a collection where centuries of horological tradition
            meet the quiet language of modern luxury.
          </p>

          <button className="primary-button" onClick={enterCollection}>
            ENTER THE COLLECTION
            <span>→</span>
          </button>
        </div>

        <div className="scroll-indicator">
          <span></span>
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* CITY JOURNEY */}

      <section
        className={`journey journey-${city.theme}`}
        id="journey"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="city-atmosphere"></div>
        <div className="city-stars"></div>
        <div className="city-horizon"></div>

        <div className="section-heading journey-heading">
          <p className="eyebrow">THE WORLD · RIGHT NOW</p>

          <h2>
            ONE WORLD.
            <br />
            <span>SEVEN MOMENTS.</span>
          </h2>

          <p>
            Travel through the world's great cities,
            one second at a time.
          </p>
        </div>

       <div
  className="city-scene"
  key={city.name}
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
  onMouseDown={handleMouseDown}
>

<div
  className="city-backdrop"
  style={{
    backgroundImage: `url(${city.image})`,
  }}
>
  <div className="city-photo-overlay"></div>
  <div className="city-photo-vignette"></div>

  <div className="city-photo-caption">
    <span>{city.name}</span>
    <small>{city.landmark}</small>
  </div>
</div>

          <div className="city-information">
            <div className="city-index">
              <span>0{selectedCity + 1}</span>
              <span>/ 0{cities.length}</span>
            </div>

            <p className="city-country">
              {city.country}
            </p>

            <h3>{city.name}</h3>

            <p className="city-description">
              {city.description}
            </p>

            <div className="city-landmark-name">
              {city.landmark}
            </div>

            <div className="city-date">
              {formatDate(city.timezone)}
            </div>
          </div>

        <div className="immersive-clock">
  <CityClock
    city={city}
    timeParts={getTimeParts(city.timeZone)}
  />
</div>
          <div className="city-controls">
            <button
              onClick={previousCity}
              aria-label="Previous city"
            >
              ←
            </button>

            <div className="city-dots">
              {cities.map((item, index) => (
                <button
                  key={item.code}
                  className={
                    index === selectedCity ? "active" : ""
                  }
                  onClick={() => setSelectedCity(index)}
                  aria-label={`Select ${item.name}`}
                />
              ))}
            </div>

            <button
              onClick={nextCity}
              aria-label="Next city"
            >
              →
            </button>
          </div>

        </div>

        <div className="swipe-hint">
          SWIPE · DRAG · EXPLORE
        </div>
      </section>

      {/* COLLECTION TRANSITION */}

      <section className="transition-section">
        <p className="eyebrow">THE COLLECTION</p>

        <h2>
          WHERE TIME
          <br />
          BECOMES <span>ART.</span>
        </h2>

        <button
          className="outline-button"
          onClick={enterCollection}
        >
          DISCOVER THE COLLECTION
        </button>
      </section>

      {/* COLLECTION */}

      <section
 className={`collection ${
  showCollection ? "collection-visible collection-enter" : ""
}`}
        id="collection"
      >
        <div className="section-heading collection-heading">
          <p className="eyebrow">
            ROYAL COLLECTION · 2026
          </p>

          <h2>
            OBJECTS OF
            <br />
            <span>ETERNITY.</span>
          </h2>

          <p>
            Precision instruments created to outlive generations.
          </p>
        </div>

        <div className="clock-gallery">
          {[1, 2, 3].map((number) => (
            <article
              className="product-card"
              key={number}
            >
              <div className="glass-case">

                <div className="case-light"></div>

                <div className="placeholder-clock">
                  <div className="placeholder-ring"></div>

                  <div className="placeholder-hands">
                    <span></span>
                    <span></span>
                  </div>

                  <div className="placeholder-center"></div>

                  <div className="placeholder-label">
                    R{number}
                  </div>
                </div>

                <div className="model-placeholder">
                  3D MODEL
                  <small>COMING SOON</small>
                </div>

              </div>

              <div className="product-information">
                <div>
                  <p className="product-number">
                    ROYAL SERIES · 00{number}
                  </p>

                  <h3>
                    The Sovereign {number}
                  </h3>
                </div>

                <button className="purchase-button">
                  PURCHASE
                  <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HERITAGE */}

      <section
        className="heritage"
        id="about"
      >
        <div className="heritage-content">

          <p className="eyebrow">
            OUR HERITAGE
          </p>

          <h2>
            PRECISION
            <br />
            <span>WITHOUT COMPROMISE.</span>
          </h2>

          <p className="heritage-text">
            Royal Horology is imagined as a house dedicated
            to the art of measuring time. Every detail is
            considered, every movement deliberate, every
            second worthy of remembrance.
          </p>

          <div className="heritage-line"></div>

          <p className="heritage-signature">
            THE HOUSE OF ROYAL HOROLOGY
          </p>

        </div>
      </section>

      <footer>

        <div className="footer-brand">
          <span className="brand-symbol">R</span>
          <span>ROYAL HOROLOGY</span>
        </div>

        <p>
          TIME · CRAFT · HERITAGE
        </p>

        <span className="footer-year">
          © 2026
        </span>

      </footer>

    </main>
  );
}

export default App;