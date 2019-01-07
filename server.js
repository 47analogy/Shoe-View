const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const server = express();

const port = process.env.Port || 5000


server.use(morgan("dev"))

// parse requests
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())


// test route
server.get('/', (req, res) => {
    res.json({ "message": "I can hear you Watson" });
});

// listen on port 
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});