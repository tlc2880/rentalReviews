//- Name: Tommy Cao
//- Date: 5/29/17
//- Company: GEVH
//- Description: Great Entertainment Vacation Rental Website

let mongoose = require('mongoose');

// Article Schema
let articleSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true
  },
  checkin:{
    type: String,
    required: true
  },   
  star:{
    type: String,
    required: true
  },  
  body:{
    type: String,
    required: true
  }
});

let Article = module.exports = mongoose.model('Articles', articleSchema);
