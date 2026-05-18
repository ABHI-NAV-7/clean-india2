const express =
require("express");

const router =
express.Router();

const multer =
require("multer");

const cloudinary =
require("cloudinary").v2;

const fs =
require("fs");

const razorpay =
require("../config/razorpay");



// ================= MODELS =================

const Report =
require("../models/Report");

const Volunteer =
require("../models/Volunteer");

const Donation =
require("../models/Donation");




// ================= CLOUDINARY =================

cloudinary.config({

  cloud_name:
  process.env.CLOUDINARY_URL
  ?.split("@")[1],

});




// ================= MULTER =================

const storage =
multer.diskStorage({

  destination:
  function(req,file,cb){

    cb(null,"uploads/");

  },



  filename:
  function(req,file,cb){

    cb(

      null,

      Date.now() +

      "-" +

      file.originalname

    );

  }

});



const upload =
multer({

  storage

});




// ================= SUBMIT REPORT =================

router.post(

  "/submit",

  upload.single("image"),

  async(req,res)=>{

    try{

      const {

        title,
        description,
        location,
        email,
        username,
        aiPrediction

      } = req.body;



      // CLOUDINARY UPLOAD

      const result =

      await cloudinary.uploader.upload(

        req.file.path

      );



      // SAVE REPORT

      const report =

      await Report.create({

        title,
        description,
        location,
        email,
        username,
        aiPrediction,

        image:
        result.secure_url

      });



      // DELETE LOCAL FILE

      fs.unlinkSync(

        req.file.path

      );



      res.status(201).json({

        message:
        "Report Submitted ✅",

        report

      });



    }catch(error){

      console.log(error);



      res.status(500).json({

        message:
        "Report Failed ❌"

      });

    }

  }

);




// ================= GET USER REPORTS =================

router.get(

  "/user/:email",

  async(req,res)=>{

    try{

      const reports =

      await Report.find({

        email:
        req.params.email

      }).sort({

        createdAt:-1

      });



      res.json(reports);



    }catch(error){

      console.log(error);



      res.status(500).json({

        message:
        "Failed To Fetch Reports ❌"

      });

    }

  }

);




// ================= LEADERBOARD =================

router.get(

  "/leaderboard",

  async(req,res)=>{

    try{

      const reports =

      await Report.find();



      const leaderboard =
      {};



      reports.forEach((report)=>{

        const name =
        report.username || "Unknown";



        if(

          !leaderboard[name]

        ){

          leaderboard[name] = {

            name,

            reports:0,

            points:0

          };

        }



        leaderboard[name]
        .reports += 1;



        leaderboard[name]
        .points += 20;

      });



      const sorted =

      Object.values(

        leaderboard

      ).sort(

        (a,b)=>

        b.points - a.points

      );



      res.json(sorted);



    }catch(error){

      console.log(error);



      res.status(500).json({

        message:
        "Leaderboard Failed ❌"

      });

    }

  }

);




// ================= VOLUNTEER =================

router.post(

  "/volunteer",

  async(req,res)=>{

    try{

      const volunteer =

      await Volunteer.create({

        name:req.body.name,

        email:req.body.email,

        phone:req.body.phone,

        city:req.body.city,

        skills:req.body.skills

      });



      res.status(201).json({

        message:
        "Volunteer Joined ✅",

        volunteer

      });



    }catch(error){

      console.log(error);



      res.status(500).json({

        message:
        "Volunteer Failed ❌"

      });

    }

  }

);




// ================= DONATION =================

router.post(

  "/donate",

  async(req,res)=>{

    try{

      const donation =

      await Donation.create({

        name:req.body.name,

        email:req.body.email,

        amount:req.body.amount

      });



      res.status(201).json({

        message:
        "Donation Saved ✅",

        donation

      });



    }catch(error){

      console.log(error);



      res.status(500).json({

        message:
        "Donation Failed ❌"

      });

    }

  }

);




// ================= CREATE ORDER =================

router.post(

  "/create-order",

  async(req,res)=>{

    try{

      const options = {

        amount:
        req.body.amount * 100,

        currency:"INR",

        receipt:
        "receipt_order"

      };



      const order =

      await razorpay.orders.create(

        options

      );



      res.json(order);



    }catch(error){

      console.log(error);



      res.status(500).json({

        message:
        "Order Creation Failed ❌"

      });

    }

  }

);




module.exports =
router;