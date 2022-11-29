const router = require("express").Router();
const { auth, ctrlWrapper, validation } = require("../../middleware");
const { joiTodoSchema } = require("../../models/todo");
const { todo: ctrl } = require("../../controllers");

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:todoId", ctrlWrapper(ctrl.getById));

router.post("/", auth, validation(joiTodoSchema), ctrlWrapper(ctrl.addOne));

router.delete("/:todoId", ctrlWrapper(ctrl.deleteById));

module.exports = router;
