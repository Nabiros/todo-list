const { User } = require("../../models");
const { Unauthorized } = require("http-errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("email or password is wrong");
  }

  const passwordCompare = bcrypt.compareSync(password, user.password);

  if (!passwordCompare) {
    throw new Unauthorized("email or password is wrong");
  }

  const payload = { id: user.id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "4h" });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    status: "success",
    code: 200,
    data: {
      email,
      token,
    },
  });
};

module.exports = signIn;
