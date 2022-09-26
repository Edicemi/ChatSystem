//route handling home page and index page
const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const Register  = require("../controllers/index");

//Register Page
router.get('/Register', (req, res) => res.render('register'))

//Login Page
router.get('/Login', (req, res) => res.render('login'))

//Register route
router.post('/register', body("fullname", "Name is required").trim(),
    body("email").isEmail().normalizeEmail(),
    body("password", "Password must be of  8 characters long and alphanumeric")
    .trim()
    .isLength({ min: 8 })
    .isAlphanumeric(),
    Register);



module.exports = router;

