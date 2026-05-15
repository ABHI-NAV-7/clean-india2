const express =
require("express");

const router =
express.Router();

const multer =
require("multer");

const cloudinary =
require("../config/cloudinary");

const Report =
require("../models/Report");



// MULTER STORAGE

const upload =
multer({

  dest:"uploads/"

});



// ================= CREATE REPORT =================

router.post(

  "/create",

  upload.single("image"),

  async(req,res)=>{

    try{

      console.log(

        req.body

      );



      const {

        title,

        description,

        location,

        userEmail

      } = req.body;



      // CHECK IMAGE

      if(!req.file){

        return res.status(400).json({

          message:
          "Image Missing ❌"

        });

      }



      // UPLOAD IMAGE TO CLOUDINARY

      const result =

      await cloudinary.uploader.upload(

        req.file.path,

        {

          folder:"clean-india"

        }

      );



      // SAVE REPORT IN MONGODB

      const report =

      await Report.create({

        title,

        description,

        location,

        userEmail,

        image:
        result.secure_url

      });



      res.status(201).json({

        message:
        "Report Submitted Successfully ✅",

        report

      });



    }catch(error){

      console.log(

        "FULL ERROR:",

        error

      );



      res.status(500).json({

        message:
        error.message

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

      await Report.find({

        userEmail:{

          $ne:null

        }

      });



      const leaderboard = {};



      reports.forEach((report)=>{

        const email =
        report.userEmail;



        if(!leaderboard[email]){

          leaderboard[email] = {

            name:
            email.split("@")[0],

            reports:0,

            points:0

          };

        }



        leaderboard[email].reports += 1;

        leaderboard[email].points += 20;

      });



      const finalLeaderboard =

      Object.values(leaderboard)

      .sort(

        (a,b)=>

        b.points - a.points

      );



      res.json(

        finalLeaderboard

      );



    }catch(error){

      console.log(error);



      res.status(500).json({

        message:
        "Leaderboard Error ❌"

      });

    }

  }

);



// ================= USER REPORTS =================

router.get(

  "/user/:email",

  async(req,res)=>{

    try{

      const reports =

      await Report.find({

        userEmail:
        req.params.email

      }).sort({

        createdAt:-1

      });



      res.json(

        reports

      );



    }catch(error){

      console.log(error);



      res.status(500).json({

        message:
        "Failed to fetch reports ❌"

      });

    }

  }

);



module.exports =
router;