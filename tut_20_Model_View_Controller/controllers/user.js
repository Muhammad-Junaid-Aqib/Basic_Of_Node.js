const User = require("../models/user");
async function handleGetAllUsers(req, res) {
  const allDatabaseUsers = await User.find({});
  return res.json(allDatabaseUsers);
}

const handleGetAllUsersById = async (req, res) => {
    const findUserById = await User.findById(req.params.id);
    if (!findUserById) return res.status(404).json({ Error : "User not Found"})
    return res.json(findUserById);
}

const handleUpdatesUsersById  = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { last_name: "Changed" })
    return res.json({ status: "Update Successfully" });
}

const handleDeleteUsersById  = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Delete Successfully" });
}

const handleCreateNewUser  = async (req, res) => {
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
  return res.status(201).json({ msg : 'success', id: result.id})
}


module.exports = {
    handleGetAllUsers,
    handleGetAllUsersById,
    handleUpdatesUsersById,
    handleDeleteUsersById,
    handleCreateNewUser,
}