const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teeShirtSchema = new Schema({
  name: String,
  brand: String,
  color: String,
  price: String,
  image : {type: String,
    default : "https://res.cloudinary.com/dtgusyvdy/image/upload/v1578323332/defaultTShirt_fzwpgz.jpg"
  }
});

const teeShirtModel = mongoose.model("TeeShirt", teeShirtSchema);

module.exports = teeShirtModel;
