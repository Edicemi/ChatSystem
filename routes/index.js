//route handling home page and index page
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => res.send('Welcome!'))

module.exports = router;

