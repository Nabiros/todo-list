const { Todo } = require("../../models");
const { NotFound } = require("http-errors");

const updateOne = async (req, res) => {
  const { todoId } = req.params;

  const result = await Todo.findByIdAndUpdate(todoId, req.body, {
    new: true,
  });

  if (!result) {
    throw new NotFound(`id ${todoId} not found`);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateOne;
