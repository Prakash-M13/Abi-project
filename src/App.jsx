import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Winternote</div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="book-btn">Book Now</button>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="overlay"></div>

        <div className="hero-content">
          <span className="tagline">
            Luxury Honeymoon Resort In Munnar
          </span>

          <h1>
            Experience Romance
            <br />
            Above The Clouds
          </h1>

          <p>
            Discover breathtaking mountain views, luxury cottages,
            candlelight dinners, and unforgettable honeymoon moments
            amidst the misty hills of Munnar.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Resort
            </button>

            <button className="secondary-btn">
              View Packages
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Resort"
          />
        </div>

        <div className="about-content">
          <span>ABOUT US</span>

          <h2>
            A Luxury Escape
            <br />
            In The Heart Of Munnar
          </h2>

          <p>
            Nestled among rolling tea plantations and mist-covered
            mountains, our resort offers an unforgettable blend of
            comfort, elegance, and nature.
          </p>

          <p>
            Whether you're celebrating your honeymoon, anniversary,
            or simply seeking tranquility, every stay is designed to
            create cherished memories.
          </p>

          <button className="primary-btn">
            Discover More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <h3>Luxury Suites</h3>
          <p>
            Spacious rooms with panoramic mountain views.
          </p>
        </div>

        <div className="feature-card">
          <h3>Private Dining</h3>
          <p>
            Romantic candlelight dinners under the stars.
          </p>
        </div>

        <div className="feature-card">
          <h3>Spa & Wellness</h3>
          <p>
            Relax with rejuvenating wellness treatments.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;