const express = require('express')
const cors = require('cors')

const path = require('path')

const app = express()

app.use(cors())

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../client/index.html"))
})

app.get('/weapons', function(req, res){
    res.sendFile(path.join(__dirname, "../client/weapons.html"))
})

app.get('/journey', function(req, res){
    res.sendFile(path.join(__dirname, "../client/journey.html"))
})

app.get('/boss-fight', function(req, res){
    res.sendFile(path.join(__dirname, "../client/boss-fight.html"))
})

app.get('/feedback', function(req, res){
    res.sendFile(path.join(__dirname, "../client/feedback.html"))
})

app.get('/css', function(req, res){
    res.sendFile(path.join(__dirname, "../client/styles.css"))
})

app.get('/js', function(req, res){
    read.sendFile(path.join(__dirname, "../client/weapons.js"))
})

app.get('/js', function(req, res){
    read.sendFile(path.join(__dirname, "../client/health-bar.js"))
})

app.get('/js', function(req, res){
    read.sendFile(path.join(__dirname, "../client/feedback.js"))
})

const port = process.env.PORT || 4567

app.listen(port, () => console.log (`Take us to warp ${port}`))