const express = require('express');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const server = express();

const port = process.env.PORT || 5000;
// TODO: Configure for Production
const db = process.env.MONGODB_URI || 'mongodb://localhost/shoesDB';

// connect to database
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('\n=== connected to mongo ===\n'))
  .catch((err) => console.log('database is not connected'));

// import routes
const shoeRoute = require('./api/routes/shoeRoutes');
const userRoute = require('./api/routes/userRoutes');
const authRoute = require('./api/routes/authRoutes');

// server.use(morgan('dev'));

// middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(compress());
// server.use(
//   helmet({
//     contentSecurityPolicy: false,
//   })
// );

server.use(
  helmet.contentSecurityPolicy({
    directives: {
      'default-src': ["'self'"],
      'img-src': ["'self'", 'data:', 'http:'],
      'font-src': ["'self'", 'https:', 'data:'],
      'style-src': ["'self'", 'https:', 'unsafe-inline'],
    },
  })
);

server.use(cors());

server.use(express.static(path.join(__dirname, './shoe-client/build')));
// test route
server.get('/', (req, res, next) => {
  res.status(200).json({ api: 'I can hear you Watson' });
});

server.use('/api', shoeRoute, userRoute, authRoute);

// 404 error handler
server.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// general error handler to return any errors found
server.use((error, req, res, next) => {
  {
    res.status(error.status || 500);
    res.json({
      error: { message: error.message },
    });
  }
});

// serve up for production deploy

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/shoe-client/build/index.html'));
  // res.sendFile(path.join(`${__dirname  }/hairspray-app/build/index.html`));
});

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// listen on port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = server;
