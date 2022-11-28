const { Todo } = require("../../models");
const { NotFound } = require("http-errors");
const mongoose = require("mongoose");

const getById = async (req, res) => {
  const { todoId } = req.params;
  const isValidId = mongoose.Types.ObjectId.isValid(todoId);

  if (!isValidId) {
    throw new NotFound(`id ${todoId} not found`);
  }

  const result = await Todo.findById(todoId);

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getById;
