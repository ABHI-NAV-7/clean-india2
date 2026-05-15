import { useState }
from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

import {
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth }
from "../firebase";

import {
  FaArrowLeft
} from "react-icons/fa";

import "../styles/Login.css";

function Login() {

  const navigate =
  useNavigate();

  const [email,setEmail] =
  useState("");

  const [password,setPassword] =
  useState("");



  // LOGIN

  const loginUser = async () => {

    try{

      const userCredential =

      await signInWithEmailAndPassword(

        auth,

        email,

        password

      );



      const user =
      userCredential.user;



      // STORE DATA

      localStorage.setItem(

        "username",

        user.displayName

      );



      localStorage.setItem(

        "email",

        user.email

      );



      localStorage.setItem(

        "isLoggedIn",

        "true"

      );



      alert(
        "Login Successful ✅"
      );



      navigate("/");



    }catch(error){

      console.log(error);



      alert(error.message);

    }

  };



  return (

    <div className="login-page">

      {/* BACK BUTTON */}

      <Link
        to="/"
        className="back-home"
      >

        <FaArrowLeft />

        Back to Home

      </Link>



      {/* CARD */}

      <div className="login-card">

        <h1>

          Welcome Back

        </h1>



        <p className="login-subtitle">

          Login to continue your
          Clean India journey 🌿

        </p>



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

            placeholder="Enter password"

            value={password}

            onChange={(e)=>
              setPassword(e.target.value)
            }

          />

        </div>



        {/* BUTTON */}

        <button

          className="login-btn"

          onClick={loginUser}

        >

          Login

        </button>



        {/* FOOTER */}

        <div className="login-footer">

          Don't have an account?

          {" "}

          <Link to="/signup">

            Signup

          </Link>

        </div>

      </div>

    </div>

  );

}

export default Login;