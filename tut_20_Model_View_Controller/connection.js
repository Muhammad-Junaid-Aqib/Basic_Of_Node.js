const { default: mongoose } = require("mongoose");


// Connection
// mongoose.connect('mongodb://127.0.0.1:27017/employees').then(
//   () => console.log("MongoDB Connected!"),
// ).catch(
//   err => console.log("Error Msg: ", err)
// )

async function connectMongoDb(URL) {
    return mongoose.connect(URL)
}

module.exports = { connectMongoDb }