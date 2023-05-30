const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 4000
require("./connect_mongo")


app.use(cors())
app.use(express.json())

// app.use(express.urlencoded({extended:true}))

app.use('/api/auth', require('./routes/auth'))
app.use('/api/request', require('./routes/friend'))

app.get("/", (req, res) => {
    res.send("<h1>Geeks App chat API</h1><h3>Made by <a href='https://www.linkedin.com/in/aksoni0520/'>Arjun</a></h3>"
    )
})



app.listen(port, () => {
    console.log(`successfully loaded at ${port}`)
})

module.exports = app;