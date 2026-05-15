import "../styles/Navbar.css";




import {
  Link,
  useNavigate,
  useLocation
} from "react-router-dom";

import { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaUserCircle
} from "react-icons/fa";

function Navbar() {

  const [menuOpen,setMenuOpen] =
  useState(false);

  const navigate = useNavigate();

  const location = useLocation();



  // USER

  const username =
localStorage.getItem("username");





  // LOGOUT

 const handleLogout = ()=>{

  // CLEAR STORAGE

  localStorage.removeItem(

    "isLoggedIn"

  );



  localStorage.removeItem(

    "username"

  );



  localStorage.removeItem(

    "email"

  );



  // REDIRECT HOME

  window.location.href = "/";

};



  // CLOSE MENU

  const closeMenu = () => {

    setMenuOpen(false);

  };



  return (

    <nav className="navbar">

      {/* LOGO */}

      <Link
        to="/"
        className="logo"
      >

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLPw4GwR9Az3iL0kMolQ8nWC4AnwDDnPszkw&s"
          alt="Clean India Logo"
        />

        <h2>

          CLEAN
          {" "}

          <span>

            INDIA

          </span>

        </h2>

      </Link>



      {/* NAV LINKS */}

      <ul
        className={
          menuOpen
          ? "nav-links active"
          : "nav-links"
        }
      >

        {/* HOME */}

        <li>

          <Link
            to="/"
            onClick={closeMenu}
          >

            Home

          </Link>

        </li>



        {/* HOW IT WORKS */}

        <li>

          {
            location.pathname === "/"

            ? (

              <a
                href="#howitworks"
                onClick={closeMenu}
              >

                How It Works

              </a>

            )

            : (

              <Link
                to="/#howitworks"
                onClick={closeMenu}
              >

                How It Works

              </Link>

            )

          }

        </li>



        {/* LEADERBOARD */}

        <li>

          <Link
            to="/Dashboard"
            onClick={closeMenu}
          >

            Rewards

          </Link>

        </li>



        {/* ABOUT */}

        <li>

          {
            location.pathname === "/"

            ? (

              <a
                href="#about"
                onClick={closeMenu}
              >

                About

              </a>

            )

            : (

              <Link
                to="/#about"
                onClick={closeMenu}
              >

                About

              </Link>

            )

          }

        </li>



        {/* IF LOGGED IN */}

        {username ? (

          <li className="profile-section">

            <FaUserCircle
              className="profile-icon"
            />

            <Link
  to="/dashboard"
  className="profile-link"
>
  </Link>



            <button
              className="logout-btn"

              onClick={handleLogout}
            >

              Logout

            </button>

          </li>

        ) : (

          <>

            {/* LOGIN */}

            <li>

              <Link
                to="/login"
                onClick={closeMenu}
              >

                Login

              </Link>

            </li>



            {/* SIGNUP */}

            <li>

              <Link
                to="/signup"

                className="signup-btn"

                onClick={closeMenu}
              >

                Signup

              </Link>

            </li>

          </>

        )}

      </ul>



      {/* MOBILE MENU */}

      <div
        className="menu-icon"

        onClick={()=>
          setMenuOpen(!menuOpen)
        }
      >

        {
          menuOpen
          ? <FaTimes />
          : <FaBars />
        }

      </div>

    </nav>

  );

}

export default Navbar;