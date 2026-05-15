import "../styles/Footer.css";

import {

  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt

} from "react-icons/fa";

import {

  Link

} from "react-router-dom";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-top">

        {/* BRAND */}

        <div className="footer-brand">

          <h2>

            CLEAN
            {" "}

            <span>

              INDIA

            </span>

          </h2>



          <p>

            Together we can create a
            cleaner, greener and
            healthier India 🌿

          </p>



          <div className="footer-badge">

            🇮🇳 Smart India Initiative

          </div>

        </div>



        {/* QUICK LINKS */}

        <div className="footer-links">

          <h3>

            Quick Links

          </h3>



          <ul>

            <li>

              <Link to="/">

                Home

              </Link>

            </li>



            <li>

              <a href="#howitworks">

                How It Works

              </a>

            </li>



            <li>

              <Link to="/Leaderboard"> 

                Leaderboard

              </Link>

            </li>



            <li>

              <Link to="/dashboard">

                Rewards

              </Link>

            </li>



            <li>

              <a href="#about">

                About

              </a>

            </li>

          </ul>

        </div>



        {/* CONTACT */}

        <div className="footer-contact">

          <h3>

            Contact

          </h3>



          <p>

            <FaEnvelope />

            {" "}

            cleanindia@gmail.com

          </p>



          <p>

            <FaPhoneAlt />

            {" "}

            +91 9618386000

          </p>



          <p>

            <FaMapMarkerAlt />

            {" "}

            Hyderabad, India

          </p>

        </div>



        {/* SOCIAL */}

        <div className="footer-social">

          <h3>

            Follow Us

          </h3>



          <div className="social-icons">

            <a

              href="https://instagram.com"

              target="_blank"

              rel="noreferrer"

            >

              <FaInstagram />

            </a>



            <a

              href="https://linkedin.com"

              target="_blank"

              rel="noreferrer"

            >

              <FaLinkedin />

            </a>



            <a

              href="https://github.com"

              target="_blank"

              rel="noreferrer"

            >

              <FaGithub />

            </a>



            <a

              href="https://twitter.com"

              target="_blank"

              rel="noreferrer"

            >

              <FaTwitter />

            </a>

          </div>

        </div>

      </div>



      {/* BOTTOM */}

      <div className="footer-bottom">

        © 2026 Clean India.
        All Rights Reserved.

      </div>

    </footer>

  );

}

export default Footer;