const mongoose =
require("mongoose");

const reportSchema =
new mongoose.Schema(

  {

    title:String,

    description:String,

    location:String,

    userEmail:String,

    image:String

  },

  {

    timestamps:true

  }

);

module.exports =
mongoose.model(

  "Report",

  reportSchema

);