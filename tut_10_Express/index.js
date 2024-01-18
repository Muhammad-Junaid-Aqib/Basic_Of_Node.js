const express = require('express')

const app = express()
const PORT = 5000


app.get('/', (req, res) => {
    return res.send('Home Page')
})

app.get('/about', (req, res) => {
    return res.send('About Page')
})

app.get('/user', (req, res) => {
    return res.send(`Hi, ${req.query.name}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})