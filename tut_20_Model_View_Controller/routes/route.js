const express = require("express");
const {
    handleGetAllUsers,
    handleGetAllUsersById,
    handleUpdatesUsersById,
    handleDeleteUsersById,
    handleCreateNewUser,
} = require('../controllers/user')

const router = express.Router();

// router.get("/users",async (req, res) => {
//   const allDatabaseUsers = await User.find({})
//   const html = `
//     <ul>
//         ${allDatabaseUsers.map((user) => `<li> ${user.first_name} - ${user.email} </li>`).join("")}
//     </ul>
//     `;
//   return res.send(`${html}`);
// });

// REST API
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetAllUsersById)
  .patch(handleUpdatesUsersById)
  .delete(handleDeleteUsersById);

router.post("/", handleCreateNewUser);

module.exports = router