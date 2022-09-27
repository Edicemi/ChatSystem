//route handling home page and index page
const express = require('express');
const router = express.Router();
// const { body } = require("express-validator");
const register  = require("../controllers/index");

//Register Page
router.get('/Register', (req, res) => res.render('register'))

//Login Page
router.get('/Login', (req, res) => res.render('login'))

//Register route
router.post('/register', register);



module.exports = router;

