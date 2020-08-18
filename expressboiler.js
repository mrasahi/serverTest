const express = require('express')
const path = require('path')
const app = express()


// These 3 lines are used in almost everything
// Requirements to use these 3 lines
// index.html must exist in root
// public folder must exist to hold html pages
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())