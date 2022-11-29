const { Todo } = require("../../models");

const addOne = async (req, res) => {
  const { _id } = req.user;

  const result = await Todo.create({
    ...req.body,
    owner: _id,
  });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addOne;
