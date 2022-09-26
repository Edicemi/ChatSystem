//route handling home page and index page
const express = require('express');
const router = express.Router();

//Register Page
router.get('/Register', (req, res) => res.render('register'))

//Login Page
router.get('/Login', (req, res) => res.render('login'))



module.exports = router;

