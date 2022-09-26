//route handling home page and index page
const express = require('express');
const router = express.Router();

//Register Page
router.get('/Register', (req, res) => res.send('Register!'))

//Login Page
router.get('/Login', (req, res) => res.send('Login!'))



module.exports = router;

