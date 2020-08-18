// Running server using express
const express = require('express')
const path = require('path')
const app = express()


app.get('/foods', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'foods.html'))
})

app.get('/games', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'games.html'))
})

app.get('/movies', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'movies.html'))
})

app.get('/songs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'songs.html'))
})


app.listen(3000)