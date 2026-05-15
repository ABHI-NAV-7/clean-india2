import "../styles/About.css";

import { Link }
from "react-router-dom";



function About() {

  return (

    <section
      className="about-section"
      id="about"
    >

      <div className="about-container">

        {/* LEFT SIDE */}

        <div className="about-left">

          <h1>

            About
            {" "}

            <span>

              Clean India

            </span>

          </h1>



          <p>

            Clean India is a
            citizen-driven movement
            to reduce public littering
            through community action
            and technology.

            We believe every citizen
            can help create a cleaner,
            greener and healthier India.

          </p>



          <p>

            Our platform allows users
            to report garbage dumping
            and littering incidents by
            uploading proof images.

            Together, we can spread
            awareness and encourage
            responsible civic behavior.

          </p>



         </div> 
          
          
<Link
  to="/movement"
  className="join-btn"
>

  Join The Movement

</Link>

        {/* RIGHT SIDE */}

        <div className="about-right">

          <div className="about-card">

            <h2>

              50,000+

            </h2>

            <p>

              Reports Filed

            </p>

          </div>



          <div className="about-card">

            <h2>

              120+

            </h2>

            <p>

              Cities Covered

            </p>

          </div>



          <div className="about-card">

            <h2>

              30,000+

            </h2>

            <p>

              Active Citizens

            </p>

          </div>



          <div className="about-card">

            <h2>

              ₹10L+

            </h2>

            <p>

              Rewards Given

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}

export default About;