const http = require('http')
const fs = require('fs')
const url = require('url')

const myServer = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end
    const log = `${Date.now()}: ${req.url}: New Req Received\n`
    const myUrl = url.parse(req.url, true)
    //
    // console.log(myUrl)
    fs.appendFile('./tut_8_Handling_Url/log.txt', log, () => {
        switch (myUrl.pathname) {
            case '/':
                res.end('Home Page')
                break;
            case '/about':
                res.end('About Page')
                break;
            case '/user':
                const userName = myUrl.query.name
                res.end(`Hi, ${userName} \nAge:${myUrl.query.age}`)
                break;
            default:
                res.end('Not Found')
        }
    })
})
myServer.listen(5000, () => {
    console.log("Listening on port 5000")
})
