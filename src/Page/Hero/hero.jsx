import Button from "../../Components/Button/Button";
import "../Hero/hero.css";

import logopng from "../../assets/logo.svg";
import heropng from "../../assets/hero.jpeg";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="left">
          <nav className="navbar">
            <div className="logo">
              <img src={logopng} alt="Treact logo" />
              <h1>Treact</h1>
            </div>
            <div className="nav-links">
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Pricing</a>
              <a href="#">Login</a>
            </div>
          </nav>
          <div className="hero-content">
            <h1>
              Find Perfect Hotels
              <span>anywhere you go.</span>
            </h1>

            <p>
              We've been in the hotels business across the world for 5 years
              now. We assure you that you will always enjoy your stay with us.
            </p>
          </div>

          <Button variant="primary">Sign Up</Button>

          <Button variant="secondary">Search Hotels</Button>
        </div>
        <div className="right">
          <img src={heropng} alt="Hotel swimming pool" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
