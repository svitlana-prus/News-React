
import "./style.css";
const Footer = () => {
  return (
    <>
      <div style={{ width: "100vw", backgroundColor: "#1f1b3d" }}></div>

      <footer>
        <section className="footer-top-wrapper">
          <section className="footer-top">
            SVITLANA
            <span className="social-links">
              <a
                href="https://www.instagram.com/prus_svitlana/"
                className="fa fa-instagram instagram"
              >  

              </a>
              <a
                href="https://www.facebook.com/svitlana.prus.3"
                className="fa fa-facebook facebook"
              >
              </a>
              <a
                href="https://twitter.com/svitlana_prus"
                className="fa fa-twitter twitter"
              >
              </a>
              <a
                href="https://myaccount.google.com/?utm_source=OGB&utm_medium=app&pli=1"
                className="fa fa-google google"
              >
              </a>
            </span>
          </section>
          <section>
            <menu>
              <h2>Atheros Learning</h2>
              <li>
                <a>For Students</a>
              </li>
              <li>
                <a>For Lectors</a>
              </li>
              <li>
                <a>Sign-Up/Log-In</a>
              </li>
            </menu>
          </section>
          <section>
            <menu>
              <h2>Atheros Cloud</h2>
              <li>
                <a>Private Data Detector</a>
              </li>
              <li>
                <a>Text Classification</a>
              </li>
              <li>
                <a>Duplicates Detector</a>
              </li>
            </menu>
          </section>
          <section>
            <menu>
              <h2>Company</h2>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </menu>
          </section>
        </section>
        <section className="footer-bottom">
          <small>© Atheros Intelligence Ltd. 2023 All rights reserved</small>
        </section>
      </footer>
    </>
  );
};

export default Footer;