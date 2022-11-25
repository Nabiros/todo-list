const mongoose = require("mongoose");

const app = require("../app");

// const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log(`Connection is successful, port : ${PORT}`);
    return app.listen(PORT);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
