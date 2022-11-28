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
      required: [true, "Description is required"],
    },
    description: {
      type: String,
      required: false,
    },
    active: {
      type: Boolean,
      default: true,
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
  taskName: Joi.string().max(15).min(1).required(),
  description: Joi.string(),
});

const Todo = model("todo", todoSchema);

module.exports = {
  Todo,
  joiTodoSchema,
};
