require("dotenv").config();



// ================= IMPORTS =================

const express =
require("express");

const mongoose =
require("mongoose");

const cors =
require("cors");

const path =
require("path");



// ================= ROUTES =================

const reportRoutes =
require("./routes/reportRoutes");

const movementRoutes =
require("./routes/movementRoutes");



const app = express();




// ================= MIDDLEWARE =================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({

  extended:true

}));



// ================= STATIC FOLDER =================

app.use(

  "/uploads",

  express.static(

    path.join(__dirname,"uploads")

  )

);




// ================= TEST ROUTE =================

app.get("/",(req,res)=>{

  res.send(

    "Clean India Backend Running 🚀"

  );

});




// ================= API ROUTES =================

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

  console.log(

    "MongoDB Error ❌"

  );



  console.log(error);

});




// ================= SERVER =================

const PORT =

process.env.PORT || 5000;



app.listen(PORT,()=>{

  console.log(

    `Server Running On Port ${PORT} 🚀`

  );

});