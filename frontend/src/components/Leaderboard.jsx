import {

  useEffect,
  useState,
  useCallback

} from "react";

import {

  FaTrophy,
  FaMedal

} from "react-icons/fa";

import API
from "../api/axios";

import "../styles/Leaderboard.css";

function Leaderboard(){

  const [leaders,setLeaders] =
  useState([]);

  const [loading,setLoading] =
  useState(true);




  // ================= FETCH LEADERBOARD =================

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



        setLoading(false);

      }catch(error){

        console.log(error);

        setLoading(false);

      }

    },

    []

  );




  useEffect(()=>{

    fetchLeaderboard();

  },[fetchLeaderboard]);




  return(

    <section className="leaderboard-section">

      <div className="container">

        {/* TITLE */}

        <h2>

          <FaTrophy />

          {" "}

          Top
          {" "}

          <span className="green-text">

            Contributors

          </span>

        </h2>



        <p className="section-sub">

          Citizens making India cleaner 🇮🇳

        </p>



        {

          loading ? (

            <h1 className="loading-text">

              Loading...

            </h1>

          ) : (

            <div className="leaderboard-table">

              {/* HEADER */}

              <div className="lb-header">

                <div>

                  Rank

                </div>



                <div>

                  User

                </div>



                <div>

                  Reports

                </div>



                <div>

                  Rewards

                </div>

              </div>



              {/* ROWS */}

              {

                leaders.map((user,index)=>(

                  <div

                    key={index}

                    className={`

                      lb-row

                      ${

                        index === 0

                        ? "gold-row"

                        : index === 1

                        ? "silver-row"

                        : index === 2

                        ? "bronze-row"

                        : ""

                      }

                    `}

                  >

                    {/* RANK */}

                    <div className="rank">

                      #{index + 1}

                    </div>



                    {/* USER */}

                    <div className="leader-user">

                      {

                        index < 3 && (

                          <FaMedal
                          className="medal-icon" />

                        )

                      }



                      {user.name}

                    </div>



                    {/* REPORTS */}

                    <div>

                      {user.reports}

                    </div>



                    {/* POINTS */}

                    <div className="points">

                      ⭐ {user.points}

                    </div>

                  </div>

                ))

              }

            </div>

          )

        }

      </div>

    </section>

  );

}

export default Leaderboard;
