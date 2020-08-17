const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url.split('/'))

    switch ((req.url.split('/')[1])) {
        case 'movies':
            fs.readFile('./lib/movies.html', 'utf8', (err, html) => {
                if (err) {console.log(err)}
                res.end(html)
            })
        case 'songs':
            fs.readFile('./lib/songs.html', 'utf8', (err, html) => {
                if (err) {console.log(err)}
                res.end(html)
            })
        case 'foods':
            fs.readFile('./lib/foods.html', 'utf8', (err, html) => {
                if (err) {console.log(err)}
                res.end(html)
            })
        case 'games':
            fs.readFile('./lib/games.html', 'utf8', (err, html) => {
                if (err) {console.log(err)}
                res.end(html)
            })
    }
})
server.listen(3000)