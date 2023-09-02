const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();


// importing our database configuration
const connectDB = require('./config/dbConfig')
const app = express();
const registrationRoutes = require('./controllers/registration')
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// calling the function
connectDB();

// setting up pug as our view engine
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// setting up directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// using my routes
app.use('/', registrationRoutes)


const port= process.env.PORT ||3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
    })
    