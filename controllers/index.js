const User = require("../models/user");
const bcrypt = require('bcrypt');
const passport = require('passport');
// const { passwordHash, passwordCompare } = require('../lib/bcrypt');
// const { validationResult, body } = require("express-validator");
const { response } = require("express");

const register = async(req, res) => {
    const { fullname, email, password, confirmpassword } = req.body;
    let errors = [];
  
    if (!fullname || !email || !password || !confirmpassword) {
      errors.push({ msg: 'Please enter all fields' });
    }
  
    if (password !== confirmpassword) {
      errors.push({ msg: 'Passwords do not match' });
    }
  
    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }
  
    if (errors.length > 0) {
      res.render('register', {
        errors,
        fullname,
        email,
        password,
        confirmpassword
      });
    } else {
      User.findOne({ email: email }).then(user => {
        if (user) {
          errors.push({ msg: 'Email already exists' });
          res.render('register', {
            errors,
            fullname,
            email,
            password,
            confirmpassword,
          });
        } else {
          const newUser = new User({
            fullname,
            email,
            password
          });
          //hash password
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              //save new user
              newUser
                .save()
                .then(user => {
                  req.flash(
                    'success_msg',
                    'You are now registered and can log in'
                  );
                  res.redirect('/users/login');
                })
                .catch(err => console.log(err));
            });
          });
        }
      });
    }
  };


  module.exports = register;