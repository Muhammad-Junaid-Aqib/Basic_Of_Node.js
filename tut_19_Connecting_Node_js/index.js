const express = require("express");
const fs = require("fs");
const users = require("../MOCK_DATA.json");
const { default: mongoose } = require("mongoose");


const app = express();
const PORT = 5000;


mongoose.connect('mongodb://127.0.0.1:27017/employees').then(
  () => console.log("MongoDB Connected!"),
).catch(
  err => console.log("Error Msg: ", err)
)


// userSchema
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  gender: {
    type: String,
  },
}, {timestamps: true}) 

const User = mongoose.model('user', userSchema)

// Middleware - plugin
app.use(express.urlencoded({ extended: false }))


app.get("/", (req, res) => {
  return res.send("Home Page");
});

app.get("/users",async (req, res) => {
  const allDatabaseUsers = await User.find({})
  const html = `
    <ul>
        ${allDatabaseUsers.map((user) => `<li> ${user.first_name} - ${user.email} </li>`).join("")}
    </ul>
    `;
  return res.send(`${html}`);
});

// REST API
app.get("/api/users", async (req, res) => {
  const allDatabaseUsers = await User.find({})

  return res.json(allDatabaseUsers);
});

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const findUserById = await User.findById(req.params.id);
    if (!findUserById) return res.status(404).json({ Error : "User not Found"})
    return res.json(findUserById);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { last_name: "Changed" })
    return res.json({ status: "Update Successfully" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Delete Successfully" });
  });

app.post("/api/users", async(req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg : "All fields are required" });
  }
  
  const result = User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  })

  // console.log('result', result)
  return res.status(201).json({ msg : 'success'})
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
