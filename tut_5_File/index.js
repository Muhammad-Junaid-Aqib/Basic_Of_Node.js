const fs = require('fs')

// Sync
// fs.writeFileSync('./tut_5_File/test.txt', 'hi')
 
// Async
// fs.writeFile('./tut_5_File/text.txt', "hi, welcome to Async", (err) => {
//   console.log("error: ", err)
// })


// read file through Sync and convert utf-8
// const result = fs.readFileSync('./tut_5_File/test.txt', "utf-8")
// console.log('result: ', result)

// read file through Async and convert utf-8
// fs.readFile('./tut_5_File/test.txt', "utf-8", (err, result) => {
//     if (err) {
//          console.log("error: ", err)
//     } else {
//         console.log("Result:", result)
//     }
//  })

// append data into existing file
// fs.appendFileSync('./tut_5_File/test.txt','here new data\n')
// fs.appendFileSync('./tut_5_File/test.txt', new Date().getDate().toString())


// make copy of existing files
// fs.cpSync('./tut_5_File/test.txt', './tut_5_File/tesst.txt')

// delete file
// fs.unlinkSync('./tut_5_File/tesst.txt')

// check file statistic
// console.log(fs.statSync('./tut_5_File/test.txt'))


// make folder
// fs.mkdirSync("./tut_5_File/through-cli-make-folder-a/a/b", {recursive: true})

const os = require('os')

console.log(os.cpus().length)