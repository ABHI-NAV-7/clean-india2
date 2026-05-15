import {

  useEffect,
  useState,
  useCallback

} from "react";

import {

  Link

} from "react-router-dom";

import {

  FaUserCircle,
  FaFileAlt,
  FaMedal,
  FaArrowLeft,
  FaTrophy

} from "react-icons/fa";

import API
from "../api/axios";

import "../styles/Dashboard.css";

function Dashboard(){

  const [reports,setReports] =
  useState([]);

  const [points,setPoints] =
  useState(0);

  const [leaders,setLeaders] =
  useState([]);




  // USER DATA

  const username =

  localStorage.getItem(

    "username"

  );



  const email =

  localStorage.getItem(

    "email"

  );




  // ================= FETCH USER REPORTS =================

  const fetchReports =
  useCallback(

    async()=>{

      try{

        const response =

        await API.get(

          `/api/reports/user/${email}`

        );



        setReports(

          response.data

        );



        setPoints(

          response.data.length * 20

        );



      }catch(error){

        console.log(error);

      }

    },

    [email]

  );




  // ================= FETCH TOP 7 =================

  const fetchLeaderboard =
  useCallback(

    async()=>{

      try{

        const response =

        await API.get(

          "/api/reports/leaderboard"

        );



        setLeaders(

          response.data.slice(0,7)

        );



      }catch(error){

        console.log(error);

      }

    },

    []

  );




  useEffect(()=>{

    fetchReports();

    fetchLeaderboard();

  },[fetchReports,fetchLeaderboard]);




  return(

    <div className="dashboard-page">

      {/* BACK BUTTON */}

      <Link

        to="/"

        className="dashboard-home-btn"

      >

        <FaArrowLeft />

        Back to Home

      </Link>



      {/* PROFILE CARD */}

      <div className="profile-card">

        <FaUserCircle
        className="profile-icon" />



        <h1 className="profile-username">

          {username}

        </h1>



        <p className="profile-email">

          {email}

        </p>

      </div>



      {/* STATS */}

      <div className="stats-container">

        {/* REPORTS */}

        <div className="stat-card">

          <FaFileAlt
          className="stat-icon" />



          <h1>

            {reports.length}

          </h1>



          <p>

            Reports

          </p>

        </div>



        {/* POINTS */}

        <div className="stat-card">

          <FaMedal
          className="stat-icon" />



          <h1>

            {points}

          </h1>



          <p>

            Points

          </p>

        </div>

      </div>



      {/* BADGE */}

      <div className="badge-card">

        🌿 Clean India Warrior

      </div>



      {/* TOP 7 LEADERBOARD */}

      <div className="top-leaders-section">

        <h2>

          <FaTrophy />

          Top 7 Contributors

        </h2>



        <div className="top-leaders-container">

          {

            leaders.map((user,index)=>(

              <div

                key={index}

                className="leader-item"

              >

                <div className="leader-rank">

                  #{index + 1}

                </div>



                <div className="leader-details">

                  <h3>

                    {user.name}

                  </h3>



                  <p>

                    {user.reports}
                    {" "}
                    Reports

                  </p>

                </div>



                <div className="leader-points">

                  ⭐ {user.points}

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </div>

  );

}

export default Dashboard;
