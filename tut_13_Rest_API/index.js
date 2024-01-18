const express = require('express')
const users = require('../MOCK_DATA.json')
const app = express()
const PORT = 5000


app.get('/', (req, res) => {
    return res.send('Home Page')
})

app.get('/about', (req, res) => {
    return res.send('About Page')
})

app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li> ${user.first_name} </li>`).join("")}
    </ul>
    `
    return res.send(`${html}`)
})

app.get('/api/users', (req, res) => {
    return res.json(users)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})