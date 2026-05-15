import {

  useEffect,
  useState

} from "react";

import API
from "../api/axios";

import "../styles/Leaderboard.css";

function Leaderboard(){

  const [leaders,setLeaders] =
  useState([]);

  const [loading,setLoading] =
  useState(true);




  // FETCH DATA

  const fetchLeaderboard =
  async()=>{

    try{

      const response =

      await API.get(

        "/api/reports/leaderboard"

      );



      setLeaders(

        response.data

      );



      setLoading(false);

    }catch(error){

      console.log(error);

      setLoading(false);

    }

  };



  useEffect(()=>{

    fetchLeaderboard();

  },[]);




  return(

    <section className="leaderboard-section">

      <div className="container">

        <h2>

          🏆 Top
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

                leaders

                .slice(0,3)

                .map((user,index)=>(

                  <div

                    key={index}

                    className={`

                      lb-row

                      ${

                        index === 0

                        ? "gold-row"

                        : index === 1

                        ? "silver-row"

                        : "bronze-row"

                      }

                    `}

                  >

                    <div className="rank">

                      #{index + 1}

                    </div>



                    <div>

                      {user.name}

                    </div>



                    <div>

                      {user.reports}

                    </div>



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