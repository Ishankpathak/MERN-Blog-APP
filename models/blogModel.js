const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Title required"],
    },
    description: {
      type: String,
      required: [true, "Description required"],
    },
    image: {
      type: String,
      required: [true, "Image required"],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: [true, "User is required"],
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);
module.exports = blogModel;
