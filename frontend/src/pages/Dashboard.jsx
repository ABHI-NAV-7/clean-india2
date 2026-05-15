import {

  useEffect,
  useState

} from "react";

import {

  Link

} from "react-router-dom";

import {

  FaUserCircle,
  FaFileAlt,
  FaMedal,
  FaArrowLeft

} from "react-icons/fa";

import API
from "../api/axios";

import "../styles/Dashboard.css";

function Dashboard(){

  const [reports,setReports] =
  useState([]);

  const [points,setPoints] =
  useState(0);




  // USER DATA

  const username =

  localStorage.getItem(

    "username"

  );



  const email =

  localStorage.getItem(

    "email"

  );




  // FETCH USER REPORTS

  const fetchReports =
  async()=>{

    try{

      console.log(

        "EMAIL:",

        email

      );



      const response =

      await API.get(

        `/api/reports/user/${email}`

      );



      console.log(

        response.data

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

  };




  useEffect(()=>{

    fetchReports();

  },[]);




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

    </div>

  );

}

export default Dashboard;