const express = require("express");
const fs = require("fs");
const users = require("../MOCK_DATA.json");


const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  return res.send("Home Page");
});

app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users.map((user) => `<li> ${user.first_name} </li>`).join("")}
    </ul>
    `;
  return res.send(`${html}`);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((item) => item.id === Number(req.params.id));
  return res.json(user);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((item) => item.id === Number(req.params.id));
    return res.json(user);
  })
  .patch((req, res) => {
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    return res.json({ status: "pending" });
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("../MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "successful", id: users.length });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
