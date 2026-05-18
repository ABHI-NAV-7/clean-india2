require("dotenv").config();

console.log(

  "RAZORPAY KEY:",

  process.env.RAZORPAY_KEY_ID

);



const express =
require("express");

const mongoose =
require("mongoose");

const cors =
require("cors");



// ROUTES

const reportRoutes =
require("./routes/reportRoutes");

const movementRoutes =
require("./routes/movementRoutes");



const app = express();



// ================= MIDDLEWARE =================

app.use(cors());

app.use(express.json());

app.use(

  "/uploads",

  express.static("uploads")

);



// ================= ROUTES =================

app.use(

  "/api/reports",

  reportRoutes

);



app.use(

  "/api/movement",

  movementRoutes

);



// ================= MONGODB =================

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



// ================= SERVER =================

const PORT =
5000;



app.listen(PORT,()=>{

  console.log(

    `Server Running On Port ${PORT} 🚀`

  );

});