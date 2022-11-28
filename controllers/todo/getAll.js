const { Todo } = require("../../models");

const getAll = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const data = await Todo.find({ owner: _id }, "", {
    skip,
    limit: Todo(limit),
  }).populate("owner", "_id name email description");

  res.json({
    status: "success",
    code: 200,
    data,
  });
};

module.exports = getAll;
