const express =
require("express");

const router =
express.Router();

const Volunteer =
require("../models/Volunteer");



// SAVE VOLUNTEER

router.post(

  "/volunteer",

  async(req,res)=>{

    try{

      console.log(

        req.body

      );



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
        "Volunteer Saved ✅",

        volunteer

      });

    }catch(error){

      console.log(error);



      res.status(500).json({

        message:
        "Server Error ❌"

      });

    }

  }

);

module.exports =
router;