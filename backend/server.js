const express =
require("express");

const mongoose =
require("mongoose");

const cors =
require("cors");

const dotenv =
require("dotenv");

const reportRoutes =
require("./routes/reportRoutes");

const movementRoutes =
require("./routes/movementRoutes");


dotenv.config();

const app = express();



// MIDDLEWARE

app.use(cors());

app.use(express.json());

app.use(
  "/uploads",
  express.static("uploads")
);



// ROUTES

app.use(
  "/api/reports",
  reportRoutes
);


app.use(

  "/api/movement",

  movementRoutes

);


// MONGODB

mongoose.connect(

  process.env.MONGO_URL

)

.then(()=>{

  console.log(
    "MongoDB Connected ✅"
  );

})

.catch((error)=>{

  console.log(error);

});



// SERVER

app.listen(5000,()=>{

  console.log(
    "Server Running 🚀"
  );

});