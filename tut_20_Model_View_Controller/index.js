const express = require("express");
const users = require("../MOCK_DATA.json");

const {logReqRes} = require('./middlewares')
const {connectMongoDb} = require('./connection')
const userRouter = require('./routes/route')

const app = express();
const PORT = 5000;


// Connection
connectMongoDb('mongodb://127.0.0.1:27017/employees').then(() => {
  console.log('MongoDB Connected!');
})

// Middleware - plugin
app.use(express.urlencoded({ extended: false }))

// Custom Middleware
app.use(logReqRes('log.txt'))

// Routes
app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
