import "../StyleCss/Footer.css";
import movieLogo from "../../assets/movieLogo.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <!-- Marvel Logo --> */}
        <div className="footer-logo">
          <img src={movieLogo} alt="logo" className="logo-image" />
        </div>

        {/* <!-- About Section --> */}
        <div className="footer-section">
          <h3 className="footer-title">About Marvel</h3>
          <p className="footer-text">
            Dive into the world of Marvel, where heroes, villains, and epic
            stories await. Experience the universe like never before.
          </p>
          {/* <!-- <a href="#" className="footer-link">Learn More &raquo;</a> --> */}
        </div>

        {/* <!-- Quick Links --> */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Movies
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Characters
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Comics
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Social Media Section --> */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-socials">
            <a href="#" className="footer-icon">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" className="footer-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="footer-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="footer-icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* <!-- Subscribe Section --> */}
        <div className="footer-section">
          <h3 className="footer-title">Subscribe</h3>
          <p className="footer-text">
            Get updates on the latest Marvel movies, comics, and more.
          </p>
          <form className="footer-form">
            {/* <input type="email" className="footer-input" placeholder="Enter your email"> */}
            <input
              type="email"
              className="footer-input"
              placeholder="Enter your email"
            />

            <button type="submit" className="footer-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* <!-- Bottom Section --> */}
      <div className="footer-bottom">
        <p>&copy; 2024 Marvel Entertainment. All Rights Reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
}

export default Footer;
