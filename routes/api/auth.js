const router = require("express").Router();
const { auth, ctrlWrapper, validation } = require("../../middleware");
const { joiUserSchema } = require("../../models/user");
const { auth: ctrl } = require("../../controllers");

router.post("/signUp", validation(joiUserSchema), ctrlWrapper(ctrl.signUp));

router.post("/signIn", validation(joiUserSchema), ctrlWrapper(ctrl.signIn));

router.get("/logOut", auth, ctrlWrapper(ctrl.logOut));

module.exports = router;
