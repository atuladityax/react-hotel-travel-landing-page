import "./Footer.css";
import { Mail, Play } from "lucide-react";

function Footer() {
  return (
    <>
      <section className="newsletter">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <Mail aria-hidden="true" strokeWidth={1.4} />
          </div>

          <div className="newsletter-text">
            <h1>Newsletter</h1>
            <p>Subscribe now to get our latest blog posts.</p>
          </div>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your Email Address"
              aria-label="Your email address"
              required
            />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-icon">T</span>
            <h2>Treact</h2>
          </div>

          <nav className="footer-nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
            <a href="#">Blog</a>
            <a href="#">Reviews</a>
          </nav>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook" className="social-facebook">
              f
            </a>

            <a href="#" aria-label="X">
              𝕏
            </a>

            <a href="#" aria-label="YouTube">
              <span className="youtube-mark">
                <Play aria-hidden="true" size={8} fill="currentColor" />
              </span>
            </a>
          </div>

          <p className="footer-copyright">
            © Copyright 2026, Atuladityax All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
