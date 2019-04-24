const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const server = express()
const mongoose = require('mongoose')

const port = process.env.Port || 5000
// TODO: Configure for Production
const db = process.env.MONGOLAB_URI || 'mongodb://localhost/shoesDB'

// connect to database
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => console.log('\n=== connected to mongo ===\n'))
  .catch(err => console.log('database is not connected'))

// import routes
const userRoute = require('./api/routes/userRoutes')
// const shoeRoute = require('./api/routes/shoeRoutes')

server.use(morgan('dev'))

// parse requests
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

// enable CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    return
    res.status(200).json({})
  }
  return next()
})

// test route
server.get('/', (req, res, next) => {
  res.status(200).json({ api: 'I can hear you Watson' })
})

server.use('/api', userRoute)
// server.use('/api', shoeController)

// error handlers
// 404 - not found
server.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

// general error handle to return any errors found
server.use((error, req, res, next) => {
  {
    res.status(error.status || 500)
    res.json({
      error: { message: error.message }
    })
  }
})

// listen on port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})