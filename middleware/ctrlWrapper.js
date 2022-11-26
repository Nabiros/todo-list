const ctrlWrapper = (ctrl) => {
  return async (res, req, next) => {
    try {
      await ctrl(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

module.exports = ctrlWrapper;
