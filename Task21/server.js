const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const fetch = require('node-fetch')
const app = express();


// Use env config
require('dotenv').config()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Defining the use of my body-parse to handle HTML content 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Securing My Application and defining add ins to use 
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))


// Defining the Link to Our API
app.get("/", function(req, res, next){
    console.log('App.get');
    
})


// Defining the Search Query and Fetch Statement to return data from Apple 
app.get('/search/:query', (req, res) => {

    const query = req.params.query;

    fetch(`https://itunes.apple.com/search?term=${query}`)
        .then(response => response.json())
        .then(data => res.send(data.results))
        .catch(error => console.log(error));

});

//  Listening to Port 3001 
const port = process.env.PORT || 3001;
app.listen(port)
console.log(`Listening on ${port}`)