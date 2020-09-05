exports.userSignupValidator=(req,res,next) =>{
    req.check('name','Name is required').notEmpty()
    req.check('email','Email must be between 3 to 32 characters')
    .matches(/.+\@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
        min:4,
        max:32
    });
    req.check('password','Password is required').notEmpty()
    req.check('password')
    .isLength({min:6})
    .withMessage('Password must contain at least 6 characters ')
    .matches(/\d/)
    .withMessage("Password must conatin a number");
    const error =req.validationErrors()
    if(errors){
        const firsterror =errors.map(error.message)[0];
        return res.status(400).json({error:firsterror});
    }
    next();
    
}