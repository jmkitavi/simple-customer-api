let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')

let personRoute = require('./routes/person')
let customerRoute = require('./routes/customer')

// initializing express app
let app = express()

// Middleware
app.use(bodyParser.json()) // Parse body
app.use(( req, res, next ) => {
	console.log(`${new Date().toString()} => ${req.originalUrl}`)
	next() // to continue to next func
})
// registering route
app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public')) // serving static content (HTML files)

// 404 Handler
app.use(( req, res, next ) => {
	res.status(404).send('Confused Travolta')
})

// 500 Handler
app.use(( err, req, res, next ) => {
	console.error(err.stack)
	res.sendFile(path.join(__dirname, '../public/500.html'))
})



const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server initialized on ${PORT}`))


// TODO deploy on now.sh
// using mLab helps.
