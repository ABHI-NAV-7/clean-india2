import {

  useState

} from "react";

import {

  useNavigate

} from "react-router-dom";

import API
from "../api/axios";

import "../styles/Movement.css";

function Movement(){

  // ================= STATES =================

  const [volunteer,setVolunteer] =
  useState({

    name:"",
    email:"",
    phone:"",
    city:"",
    skills:""

  });



  const [donation,setDonation] =
  useState({

    name:"",
    email:"",
    amount:500

  });



  const [showPopup,setShowPopup] =
  useState(false);



  const navigate =
  useNavigate();




  // ================= HANDLE VOLUNTEER =================

  const handleVolunteer =
  (e)=>{

    setVolunteer({

      ...volunteer,

      [e.target.name]:
      e.target.value

    });

  };




  // ================= HANDLE DONATION =================

  const handleDonation =
  (e)=>{

    setDonation({

      ...donation,

      [e.target.name]:
      e.target.value

    });

  };




  // ================= SUBMIT VOLUNTEER =================

  const submitVolunteer =
  async()=>{

    try{

      // VALIDATION

      if(

        !volunteer.name ||

        !volunteer.email ||

        !volunteer.phone ||

        !volunteer.city ||

        !volunteer.skills

      ){

        alert(

          "Please fill all volunteer fields ❌"

        );



        return;

      }



      // SAVE TO MONGO

      const response =

      await API.post(

        "/api/movement/volunteer",

        volunteer

      );



      console.log(

        response.data

      );



      // SHOW POPUP

      setShowPopup(true);



      // REDIRECT

      setTimeout(()=>{

        navigate("/");

      },4000);



    }catch(error){

      console.log(error);

    }

  };




  // ================= DONATE =================

  const donateNow =
  async()=>{

    try{

      // VALIDATION

      if(

        !donation.name ||

        !donation.email ||

        !donation.amount

      ){

        alert(

          "Please fill all donation fields ❌"

        );



        return;

      }



      // SAVE DONATION

      await API.post(

        "/api/movement/donate",

        donation

      );



      // RAZORPAY LINK

      window.location.href =

      "https://rzp.io/l/testpayment";



    }catch(error){

      console.log(error);

    }

  };




  return(

    <>

      {/* POPUP */}

      {

        showPopup && (

          <div className="welcome-popup">

            <div className="popup-card">

              <h1>

                🌿 Welcome To The Family

              </h1>



              <p>

                Together we will build
                a cleaner and greener
                India 🇮🇳

              </p>



              <div className="popup-loader">

              </div>

            </div>

          </div>

        )

      }




      {/* PAGE */}

      <div className="movement-page">

        <h1>

          Join The Movement 🌿

        </h1>



        <div className="movement-container">

          {/* VOLUNTEER */}

          <div className="movement-card">

            <h2>

              Join as Volunteer

            </h2>



            <input

              type="text"

              placeholder="Name"

              name="name"

              value={volunteer.name}

              onChange={handleVolunteer}

              required

            />



            <input

              type="email"

              placeholder="Email"

              name="email"

              value={volunteer.email}

              onChange={handleVolunteer}

              required

            />



            <input

              type="text"

              placeholder="Phone"

              name="phone"

              value={volunteer.phone}

              onChange={handleVolunteer}

              required

            />



            <input

              type="text"

              placeholder="City"

              name="city"

              value={volunteer.city}

              onChange={handleVolunteer}

              required

            />



            <textarea

              placeholder="Skills"

              name="skills"

              value={volunteer.skills}

              onChange={handleVolunteer}

              required

            />



            <button

              type="button"

              onClick={submitVolunteer}

            >

              Join Now

            </button>

          </div>




          {/* DONATE */}

          <div className="movement-card">

            <h2>

              Donate ❤️

            </h2>



            <input

              type="text"

              placeholder="Name"

              name="name"

              value={donation.name}

              onChange={handleDonation}

              required

            />



            <input

              type="email"

              placeholder="Email"

              name="email"

              value={donation.email}

              onChange={handleDonation}

              required

            />



            <h3>

              ₹ {donation.amount}

            </h3>



            <input

              type="range"

              min="100"

              max="10000"

              step="100"

              value={donation.amount}

              name="amount"

              onChange={handleDonation}

            />



            <button

              onClick={donateNow}

            >

              Donate Now

            </button>

          </div>

        </div>

      </div>

    </>

  );

}

export default Movement;