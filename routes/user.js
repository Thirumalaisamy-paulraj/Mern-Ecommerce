const express = require('express')
const router =express.Router()
const {sayHi,signup}=require('../controllers/user.js')
const {userSignupValidator} =require('../validator');
router.get('/ping',sayHi);
router.post('/user/signup',userSignupValidator,signup)

module.exports =router;
