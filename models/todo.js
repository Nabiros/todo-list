const { Schema, model } = require("mongoose");
const Joi = require("joi");

const todoSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["inProgress", "complete", "failed"],
      default: "InProgress",
    },
    taskName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "authUser",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiTodoSchema = Joi.object({
  type: Joi.string().required(),
  taskName: Joi.string().max(15),
  description: Joi.string().required(),
});

const Todo = model("todo", todoSchema);

module.exports = {
  Todo,
  joiTodoSchema,
};
