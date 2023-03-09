const mongoose = require("mongoose");

const PasswordSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  entries: [
    {
      user: {
        type: String,
        required: true,
      },

      password: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Creds", PasswordSchema);
