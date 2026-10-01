import "../Testimonials/Testimonials.css";
import charlotteImage from "../../assets/man1.jpeg";
import testimonialImage from "../../assets/beach1.jpeg";
const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <div className="testimonial-left">
          <div className="testimonial-heading">
            <h1>Testimonials</h1>

            <p>
              Here are what some of our amazing customers are saying about our
              hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="testimonial-review">
            <p className="review-text">
              <span className="quote-start">“</span>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia.
              <span className="quote-end">”</span>
            </p>

            <div className="review-author">
              <img src={charlotteImage} alt="Charlotte Hale" />

              <div className="author-details">
                <h2>Charlotte Hale</h2>
                <p>CEO, Delos Inc.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-right">
          <img
            className="testimonial-image"
            src={testimonialImage}
            alt="Tropical beach with palm trees and an airplane"
          />

          <div className="testimonial-buttons">
            <button type="button" aria-label="Previous testimonial">
              &#8249;
            </button>

            <button type="button" aria-label="Next testimonial">
              &#8250;
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
