const execSh = require('exec-sh')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hi")
    execSh("npx wdio")
})

app.listen(process.env.PORT)
