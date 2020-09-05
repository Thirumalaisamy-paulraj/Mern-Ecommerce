const User =require('../models/user');
const {errorHandler}= require('../helpers/dbErrorHandler')

exports.sayHi =(req,res) =>{
    res.json({
       error:0, 
       code:200,
       message:"The app is running on  server side"})
}


exports.signup =(req,res) =>{
    console.log("req.body",req.body);
    const user =new User(req.body);
    user.save((err,user)=>{
      if(err){
          return res.status(400).json({
              err:errorHandler(err)
          });
      }
      user.salt=undefined;
      user.hashed_password =undefined;
      res.json({
          user
      })
    })
}