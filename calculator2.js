// Running server using express
const express = require('express')
const app = express()


// localhost:3000/calc/op/a/b
app.get('/calc/:op/:a/:b', (req, res) => {

    switch (req.params.op) {
        case 'add':
          res.send(`${parseInt(req.params.a) + parseInt(req.params.b)}`)
          break
        case 'subtract':
            res.send(`${parseInt(req.params.a) - parseInt(req.params.b)}`)
            break
        case 'multiply':
            res.send(`${parseInt(req.params.a) * parseInt(req.params.b)}`)
            break
        case 'divide':
            res.send(`${parseInt(req.params.a) / parseInt(req.params.b)}`)
            break
    }
})


app.listen(3000)