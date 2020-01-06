const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TeeShirtSchema = new Schema({
  name: String,
  brand: String,
  color: String,
  price: String,
  endDate: Date,
  image : {type: String,
    default : "https://res.cloudinary.com/dtgusyvdy/image/upload/v1578323332/defaultTShirt_fzwpgz.jpg"
  }
});

const TeeShirtModel = mongoose.model("TeeShirt", TeeShirtSchema);

module.exports = TeeShirtModel;
