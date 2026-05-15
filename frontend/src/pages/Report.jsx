import {

  useState,
  useEffect

} from "react";

import {

  useNavigate,
  Link

} from "react-router-dom";

import {

  FaArrowLeft

} from "react-icons/fa";

import API
from "../api/axios";

import "../styles/Report.css";

function Report(){

  const navigate =
  useNavigate();



  // STATES

  const [title,setTitle] =
  useState("");

  const [description,setDescription] =
  useState("");

  const [location,setLocation] =
  useState("");

  const [image,setImage] =
  useState(null);

  const [preview,setPreview] =
  useState("");

  const [loading,setLoading] =
  useState(false);

  const [prediction,setPrediction] =
  useState("");



  // LOGIN CHECK

  useEffect(()=>{

    const isLoggedIn =

    localStorage.getItem(

      "isLoggedIn"

    );



    if(!isLoggedIn){

      navigate("/login");

    }

  },[]);



  // ================= AI PREDICTION =================

  const predictImage =
  async(file)=>{

    try{

      if(!window.tmImage){

        console.log(

          "Teachable Machine not loaded"

        );

        return;

      }



      const modelURL =

      "https://teachablemachine.withgoogle.com/models/qlb0OOiXL/";



      console.log(

        "Loading AI Model..."

      );



      const model =

      await window.tmImage.load(

        modelURL + "model.json",

        modelURL + "metadata.json"

      );



      const img =
      document.createElement("img");



      img.src =
      URL.createObjectURL(file);



      img.onload =
      async()=>{

        try{

          const predictions =

          await model.predict(img);



          console.log(

            predictions

          );



          let highest =
          predictions[0];



          predictions.forEach((p)=>{

            if(

              p.probability >

              highest.probability

            ){

              highest = p;

            }

          });



          setPrediction(

            `${highest.className}
            (${(
              highest.probability * 100
            ).toFixed(2)}%)`

          );



        }catch(error){

          console.log(

            "Prediction Error:",

            error

          );

        }

      };

    }catch(error){

      console.log(

        "AI ERROR:",

        error

      );

    }

  };



  // ================= HANDLE IMAGE =================

  const handleImage =
  (e)=>{

    const file =
    e.target.files[0];



    setImage(file);



    if(file){

      setPreview(

        URL.createObjectURL(file)

      );



      predictImage(file);

    }

  };



  // ================= LOCATION =================

  const getLocation = () => {

    if(

      navigator.geolocation

    ){

      navigator.geolocation.getCurrentPosition(

        async(position)=>{

          const latitude =
          position.coords.latitude;

          const longitude =
          position.coords.longitude;



          try{

            const response =

            await fetch(

              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`

            );



            const data =
            await response.json();



            setLocation(

              data.display_name

            );



          }catch(error){

            console.log(error);



            setLocation(

              `Lat:
              ${latitude},
              Long:
              ${longitude}`

            );

          }

        },

        ()=>{

          alert(

            "Location access denied ❌"

          );

        }

      );

    }

  };



  // ================= SUBMIT REPORT =================

  const submitReport =
  async()=>{

    try{

      setLoading(true);



      const formData =
      new FormData();



      formData.append(

        "title",

        title

      );



      formData.append(

        "description",

        description

      );



      formData.append(

        "location",

        location

      );



      formData.append(

        "image",

        image

      );


const email =

localStorage.getItem(

  "email"

);



if(!email){

  alert(

    "Login Required ❌"

  );



  return;

}



formData.append(

  "userEmail",

  email

);


      const response =

      await API.post(

        "/api/reports/create",

        formData,

        {

          headers:{

            "Content-Type":
            "multipart/form-data"

          }

        }

      );



      setLoading(false);



      alert(

        response.data.message

      );



      navigate("/dashboard");



    }catch(error){

      console.log(error);



      setLoading(false);



      alert(

        error.response?.data?.message ||

        "Report Failed ❌"

      );

    }

  };



  return(

    <div className="report-page">

      {/* BACK BUTTON */}

      <Link

        to="/"

        className="back-home"

      >

        <FaArrowLeft />

        Back to Home

      </Link>



      {/* CARD */}

      <div className="report-card">

        <h1>

          Report Garbage

        </h1>



        <p className="report-subtitle">

          Help make India cleaner 🌿

        </p>



        {/* TITLE */}

        <div className="input-group">

          <label>

            Title

          </label>



          <input

            type="text"

            placeholder=
            "Enter title"

            value={title}

            onChange={(e)=>

              setTitle(

                e.target.value

              )

            }

          />

        </div>



        {/* DESCRIPTION */}

        <div className="input-group">

          <label>

            Description

          </label>



          <textarea

            placeholder=
            "Enter description"

            value={description}

            onChange={(e)=>

              setDescription(

                e.target.value

              )

            }

          />

        </div>



        {/* LOCATION */}

        <div className="input-group">

          <label>

            Location

          </label>



          <input

            type="text"

            placeholder=
            "Enter location"

            value={location}

            onChange={(e)=>

              setLocation(

                e.target.value

              )

            }

          />

        </div>



        {/* LOCATION BUTTON */}

        <button

          type="button"

          className="location-btn"

          onClick={getLocation}

        >

          📍 Use Current Location

        </button>



        {/* IMAGE */}

        <div className="input-group">

          <label>

            Upload Image

          </label>



          <input

            type="file"

            accept="image/*"

            onChange={handleImage}

          />

        </div>



        {/* IMAGE PREVIEW */}

        {

          preview && (

            <img

              src={preview}

              alt="preview"

              className="preview-image"

            />

          )

        }



        {/* AI RESULT */}

        {

          prediction && (

            <div className="ai-result">

              🤖 Detected:
              {" "}

              {prediction}

            </div>

          )

        }



        {/* SUBMIT BUTTON */}

        <button

          className="report-btn"

          onClick={submitReport}

          disabled={

            !title ||

            !description ||

            !location ||

            !image ||

            loading

          }

        >

          {

            loading

            ? "Submitting..."

            : "Submit Report"

          }

        </button>

      </div>

    </div>

  );

}

export default Report;