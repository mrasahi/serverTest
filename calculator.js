const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url.split('/'))

    switch (req.url.split('/')[1]) {
        case 'add':
            console.log(parseInt(req.url.split('/')[2]) + parseInt(req.url.split('/')[3]))
            break
        case 'subtract':
            console.log(parseInt(req.url.split('/')[2]) - parseInt(req.url.split('/')[3]))
            break
        case 'multiply':
            console.log(parseInt(req.url.split('/')[2]) * parseInt(req.url.split('/')[3]))
            break
        case 'divide':
            console.log(parseInt(req.url.split('/')[2]) / parseInt(req.url.split('/')[3]))
            break
    }
})
server.listen(3000)