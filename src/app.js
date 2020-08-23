//Core Modules Node
const path = require('path') // Utilities for working with paths

//NPM Node Modules
const express = require('express') // Express is a node framework to facilitate the development of node based web pplications

//const cors = require('cors');

const app = express() // creates a new express application for you

//console.log(__dirname)
//console.log(__filename)

const port = process.env.PORT || 3000 // define the por the app will run

const pubDirPath = path.join(__dirname, '../public') // path.join put together all paths given. --dirname tell us the absolute path of the directory containing the currently executing file. If you just put '..' it moves us back one folder. On this example we are giving the path of the current file, we go back 1 file and enter in public, which contains the files we are looking for - index.html, etc.
//console.log(puDirPath)

//app.use(cors());

app.use(express.static(pubDirPath)) // app.use executes every time the app receives a request. app.static is the expression to serve static pages.

// app.get('', (req, res) => {
//     res.send('<h1>Home</h1>')
// })

// Processing Query Strings
// app.get - defines the route
// app.get('/test', (req, res) => { ----> the application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function. With multiple callback functions, you need to call the next()
app.get('/test', (req, res) => {
  //console.log(req.query.tst2) /test?tst2=anotherTest
  //res.send('precessed')

  if (!req.query.tst2) {
    res.send({
      error: 'You must provide a tst2 parameter', // http://localhost:3000/test?tst1=newTest
    })
  } else {
    // if you remove the else you need to add a return inside the if
    res.send({
      recParm1: req.query.tst1,
      recParm2: req.query.tst2,
    }) // http://localhost:3000/test?tst1=newTest&tst2=anotherTest
  }
})

// req.query = An object containing a property for each query string parameter in the route.

// res.send = Send a string response in a format other than JSON (XML, CSV, plain text, etc.). If you want to send a JSON you use res.json() - It accepts an object or array, and converts it to JSON before sending it.

app.get('/weather', (req, res) => {
  res.send({
    forecast: "It's Cloudy",
    location: 'Vancouver',
  })
})

app.get('/date', (req, res) => {
  var d = new Date()
  res.send({
    day: d.getDate(),
    month: d.getMonth() + 1,
  })
})

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'Andrew',
    },
    {
      name: 'Sarah',
    },
  ])
})

app.get('/more', (req, res) => {
  res.send('<h1>More about us</h1>')
})

app.get('/repeat', (req, res) => {
  if (!req.query.num) {
    res.send({
      error: 'You must provide a number',
    })
  } else {
    res.send({
      numRep: req.query.num.repeat(10),
    })
  }
})

// Starting an HTTP server on a given port number
// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// })

// Starting an HTTP server on the given port number
app.listen(port, () => {
  console.log(`The Server is Up and Running on Port ${port}`)
})

// Terminal commands
// To run the script on localhost: nodemon src/app.js
// Installing modules:
// 1 - npm init -y
// 2 - Express: npm i express
// 3 - Nodemon: npm i nodemon
