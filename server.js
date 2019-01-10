const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const server = express()

const port = process.env.Port || 5000

// import routes
const userRoutes = require('./api/routes/users')
const shoeRoutes = require('./api/routes/shoes')

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

server.use('/api', userRoutes)
server.use('/api', shoeRoutes)

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
