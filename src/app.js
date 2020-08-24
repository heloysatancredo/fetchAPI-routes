//Core Modules Node
const path = require('path') // Utilities for working with paths

//NPM Node Modules
const express = require('express') // Express is a node framework to facilitate the development of node based web pplications
const app = express() // creates a new express application for you
const port = process.env.PORT || 3000 // define the por the app will run
const pubDirPath = path.join(__dirname, '../public')

app.use(express.static(pubDirPath))

app.get('/test', (req, res) => {
  if (!req.query.tst2) {
    res.send({
      error: 'You must provide a tst2 parameter',
    })
  } else {
    // if you remove the else you need to add a return inside the if
    res.send({
      recParm1: req.query.tst1,
      recParm2: req.query.tst2,
    })
  }
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
