const getCurrentUser = async (req, res) => {
  const { email, token } = req.user;

  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        email,
        token,
      },
    },
  });
};

module.exports = getCurrentUser;
