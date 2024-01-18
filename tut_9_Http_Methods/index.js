// http methods
// get     ==> when you want to get some data from the server
// post    ==> when you want to send and mutate some data in server
// put     ==> upload pic or and any thing on server
// patch   ==> changing in the existing data
// delete  ==> delete data

const http = require("http");
const fs = require("fs");

// npm install url for this package
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end;
    const log = `${Date.now()}: ${req.method} : ${req.url}: New Req Received\n`;
    const myUrl = url.parse(req.url, true);
    //
    // console.log(myUrl)
    fs.appendFile("./tut_9_Http_Methods/log.txt", log, () => {
        switch (myUrl.pathname) {
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                res.end("About Page");
                break;
            case "/user":
                const userName = myUrl.query.name;
                res.end(`Hi, ${userName} \nAge:${myUrl.query.age}`);
                break;
            case "/signup":
                if (req.method === "GET") res.end("this is signup page");
                else if (req.method === "POST") res.end("successful");
            default:
                res.end("Not Found");
        }
    });
});
myServer.listen(5000, () => {
    console.log("Listening on port 5000");
});
