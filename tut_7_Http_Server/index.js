const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url}: New Req Received\n`
    fs.appendFile('./tut_7_Http_Server/log.txt', log, () => {
        // res.end(`hi from server agina`)
        switch (req.url) {
            case '/':
                res.end('Home Page')
                break;
            case '/about':
                res.end('About Page')
                break;
            default:
                res.end('Not Found')
        }
    })
})
myServer.listen(5000, () => {
    console.log("Listening on port 5000")
})
