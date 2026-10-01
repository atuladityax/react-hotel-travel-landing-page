import "./AboutSection.css";
import aboutimg from "../../assets/hotel-about.jpeg";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-image">
        <img className="image" src={aboutimg} alt="Beautiful seaside hotel" />
      </div>

      <div className="about-content">
        <div className="about-header">
        <h1>We have the best <br />service.</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h2>13</h2>
            <span>Countries</span>
          </div>

          <div className="stat">
            <h2>49</h2>
            <span>Hotels</span>
          </div>

          <div className="stat">
            <h2>203</h2>
            <span>Rooms</span>
          </div>

          <div className="stat">
            <h2>1037</h2>
            <span>Workers</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
