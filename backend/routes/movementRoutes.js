const express =
require("express");

const router =
express.Router();



const razorpay =
require("../config/razorpay");



const Volunteer =
require("../models/Volunteer");

const Donation =
require("../models/Donation");




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