import "../styles/HowitWorks.css";

import {
  FaCamera,
  FaUpload,
  FaCheckCircle,
  FaGift,
  FaStar,
  FaMedal,
  FaTrophy
} from "react-icons/fa";

function HowItWorks() {

  return (

    <section
  className="how-section"
  id="howitworks"
>

      <div className="how-container">

        {/* LEFT SIDE */}

        <div className="how-left">

          <h2>

            How It Works

          </h2>



          {/* STEP 1 */}

          <div className="step-card">

            <div className="step-icon">

              <FaCamera />

            </div>



            <div className="step-arrow">

              ❯

            </div>



            <div className="step-content">

              <h3>

                1. Click a Photo

              </h3>

              <p>

                Capture a clear photo of
                people throwing garbage
                or littering.

              </p>

            </div>

          </div>



          {/* STEP 2 */}

          <div className="step-card">

            <div className="step-icon">

              <FaUpload />

            </div>



            <div className="step-arrow">

              ❯

            </div>



            <div className="step-content">

              <h3>

                2. Upload & Submit

              </h3>

              <p>

                Add location and submit
                your report on our
                platform.

              </p>

            </div>

          </div>



          {/* STEP 3 */}

          <div className="step-card">

            <div className="step-icon">

              <FaCheckCircle />

            </div>



            <div className="step-arrow">

              ❯

            </div>



            <div className="step-content">

              <h3>

                3. We Verify

              </h3>

              <p>

                Our team verifies your
                report and takes action.

              </p>

            </div>

          </div>



          {/* STEP 4 */}

          <div className="step-card">

            <div className="step-icon">

              <FaGift />

            </div>



            <div className="step-arrow">

              ❯

            </div>



            <div className="step-content">

              <h3>

                4. Earn Rewards

              </h3>

              <p>

                Get reward points,
                badges and exciting
                benefits.

              </p>

            </div>

          </div>

        </div>



        {/* RIGHT SIDE */}

        <div className="reward-box">

          <h2>

            Earn Exciting Rewards

          </h2>



          <div className="reward-grid">

            <div className="reward-item">

              <div className="reward-icon yellow">

                <FaStar />

              </div>

              <p>

                Reward Points

              </p>

            </div>



            <div className="reward-item">

              <div className="reward-icon green">

                <FaMedal />

              </div>

              <p>

                Badges & Certificates

              </p>

            </div>



            <div className="reward-item">

              <div className="reward-icon orange">

                <FaGift />

              </div>

              <p>

                Cashback & Vouchers

              </p>

            </div>



            <div className="reward-item">

              <div className="reward-icon blue">

                <FaTrophy />

              </div>

              <p>

                Featured on Leaderboard

              </p>

            </div>

          </div>



          <div className="reward-footer">

            The more you report,
            the more you earn!

          </div>

        </div>

      </div>

    </section>

  );

}

export default HowItWorks;