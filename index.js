const express = require('express')
const router = require('./router/users')
const app = express()

const port = 3001

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})