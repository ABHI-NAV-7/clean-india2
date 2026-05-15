import { useState } from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

import {
  createUserWithEmailAndPassword,

  updateProfile

} from "firebase/auth";

import { auth }
from "../firebase";

import {
  FaArrowLeft
} from "react-icons/fa";

import "../styles/Signup.css";

function Signup() {

  const navigate = useNavigate();

  const [username,setUsername] =
  useState("");

  const [email,setEmail] =
  useState("");

  const [password,setPassword] =
  useState("");



  // SIGNUP

  const signupUser = async () => {

    try{

      // CREATE USER

      const userCredential =

      await createUserWithEmailAndPassword(

        auth,

        email,

        password

      );



      // UPDATE USERNAME

      await updateProfile(

        userCredential.user,

        {

          displayName:username

        }

      );



      // STORE DATA

      localStorage.setItem(

        "username",

        username

      );



      localStorage.setItem(

        "email",

        email

      );



      localStorage.setItem(

        "isLoggedIn",

        "true"

      );



      alert(
        "Signup Successful ✅"
      );



      navigate("/");



    }catch(error){

      console.log(error);



      alert(error.message);

    }

  };



  return (

    <div className="signup-page">

      {/* BACK BUTTON */}

      <Link
        to="/"
        className="back-home"
      >

        <FaArrowLeft />

        Back to Home

      </Link>



      {/* CARD */}

      <div className="signup-card">

        <h1>

          Create Account

        </h1>



        <p className="signup-subtitle">

          Join the Clean India
          movement today 🌿

        </p>



        {/* USERNAME */}

        <div className="input-group">

          <label>

            Username

          </label>

          <input

            type="text"

            placeholder="Enter username"

            value={username}

            onChange={(e)=>
              setUsername(e.target.value)
            }

          />

        </div>



        {/* EMAIL */}

        <div className="input-group">

          <label>

            Email

          </label>

          <input

            type="email"

            placeholder="Enter email"

            value={email}

            onChange={(e)=>
              setEmail(e.target.value)
            }

          />

        </div>



        {/* PASSWORD */}

        <div className="input-group">

          <label>

            Password

          </label>

          <input

            type="password"

            placeholder="Create password"

            value={password}

            onChange={(e)=>
              setPassword(e.target.value)
            }

          />

        </div>



        {/* BUTTON */}

        <button

          className="signup-btn"

          onClick={signupUser}

        >

          Signup

        </button>



        {/* FOOTER */}

        <div className="signup-footer">

          Already have an account?

          {" "}

          <Link to="/login">

            Login

          </Link>

        </div>

      </div>

    </div>

  );

}

export default Signup;