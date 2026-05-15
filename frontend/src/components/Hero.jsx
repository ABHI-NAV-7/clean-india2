import "../styles/Hero.css";


import {
  FaCamera,
  FaGift,
  FaCity,
  FaShieldAlt
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Hero() {

  return (

    <section className="hero">

      <div className="hero-left">

        


        {/* HEADING */}

        <h1>

          A Cleaner India
          <br />

          <span>

            Starts with You

          </span>

        </h1>



        {/* SUBTEXT */}

        <h2>

          See it. Click it.
          Report it.
          <span> Change it.</span>

        </h2>



        <p className="hero-description">

          Upload photos of people
          throwing garbage or
          littering in public places.

          Your action today leads
          to a cleaner,
          better tomorrow.

        </p>



        {/* BUTTON */}

        <Link to="/report">

          <button>

            Upload Proof

          </button>

        </Link>



        {/* INFO CARD */}

        <div className="hero-card">

          <div className="card-icon">

           <label className="card-icon">

  <FaCamera />

  <input
    type="file"
    accept="image/*"
    capture="environment"
    hidden

    onChange={(e) => {

      const file = e.target.files[0];

      if(file){

        alert(
          "Photo Selected Successfully ✅"
        );

      }

    }}

  />

</label>

          </div>



          <div>

            <h3>

              Add Proof of People
              Throwing Garbage

            </h3>

            <p>

              Click. Upload.
              Earn Rewards.

            </p>

          </div>

        </div>



        {/* FEATURES */}

        <div className="hero-features">

          <div className="feature">

            <FaShieldAlt />

            <div>

              <h4>

                Report Littering

              </h4>

              <p>

                Upload real photos

              </p>

            </div>

          </div>



          <div className="feature">

            <FaCity />

            <div>

              <h4>

                Help the City

              </h4>

              <p>

                Keep India Clean

              </p>

            </div>

          </div>



          <div className="feature">

            <FaGift />

            <div>

              <h4>

                Earn Rewards

              </h4>

              <p>

                Get recognized

              </p>

            </div>

          </div>

        </div>

      </div>



      {/* RIGHT SIDE */}

      <div className="hero-right">

        <div className="phone">

          <div className="phone-screen">

            <div className="screen-content">

              🚶 ➜

              <div className="trash-icons">

                🗑️ 🪣

              </div>

            </div>

          </div>

        </div>



        <div className="floating-card">

          <FaShieldAlt />

          <div>

            <h4>

              Your Small Action

            </h4>

            <p>

              Big Impact

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Hero;