const express = require('express')

const path = require('path')

const app = express()

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../client/index.html"))
})

app.get('/weapons', function(req, res){
    res.sendFile(path.join(__dirname, "../client/weapons.html"))
})

app.get('/journey', function(req, res){
    res.sendFile(path.join(__dirname, "../client/journey.html"))
})

app.get('/journey', function(req, res){
    res.sendFile(path.join(__dirname, "../client/terrorblade.html"))
})

app.get('/css', function(req, res){
    res.sendFile(path.join(__dirname, "../client/styles.css"))
})

app.get('/js', function(req, res){
    read.sendFile(path.join(__dirname, "../client/main.js"))
})

const port = process.env.PORT || 4567

app.listen(port, () => console.log (`Take us to warp ${port}`))