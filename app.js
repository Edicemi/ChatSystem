require('./lib/db');
require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
logger = require('morgan');
const expressLayout = require('express-ejs-layouts');
const indexRoute = require('./routes/index.js');
const userRoute = require('./routes/users.js');

//middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Routes
app.use('/', indexRoute);
app.use('/users', userRoute);

//server
app.listen(process.env.PORT, _ => {
    console.log(`Server running on PORT ${ process.env.PORT } `);
});
if (err => {
        console.log(`Error connecting to MongoDB: ${ err }`);
    });