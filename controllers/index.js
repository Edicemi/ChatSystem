const User = require("../models/user");
const { passwordHash, passwordCompare } = require('../lib/bcrypt');
const { validationResult, body } = require("express-validator");
const { response } = require("express");

const register = async(req, res) => {
    const { fullname, email, password, confirmpassword } = req.body;
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            errors.push({msg: "Error request, check input again." })
        }
  
        if (fullname && email && password) {
            let userExist = await User.findOne({ email: email })
            if (userExist) {
                errors.push({msg: `Email ${email} already exist, try another one.` })
            }
  
         if (password != confirmpassword) {
      errors.push({ msg: 'Passwords do not match' });
            }
  
            if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
            }
           
            if(errors.length > 0) {
                res.render('register', {
                    errors,
                    fullname,
                    email,
                });
            }else{
                res.send('pass');
            }
        const hashedPassword = await passwordHash(password)
            const user = new User({
                fullname: fullname,
                email: email,
                password: hashedPassword,
            })
  
            await user.save();
                  res.redirect('/users/login');
                }else {
                    errors.push({mag:'Invalid parameters provided.'});
                }
            } catch (error) {
                console.log(error)
                return res.status(error.code).json({
                    message: error.message,
                    code: error.code,
                })
            }
        }

        module.exports = register;