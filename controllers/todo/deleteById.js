const { Todo } = require("../../models");
const { NotFound } = require("mongoose");

const deleteById = async (req, res) => {
  const { todoId } = req.params;

  const result = await Todo.findByIdAndRemove(todoId);

  if (!result) {
    throw new NotFound(`id ${todoId} not found`);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    message: "todo deleted successfully",
  });
};

module.exports = deleteById;
