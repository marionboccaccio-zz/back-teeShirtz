const mongoose = require("mongoose");
const teeShirtModel = require("../model/TeeShirt");

// const dbName = "tee-shirtz";
// mongoose.connect("mongodb://localhost/tee-shirtz");

const teeShirtz = [
  {
    name: "ADIDAS ORIGINALS",
    brand: "Adidas",
    color: "Black",
    price: "20 €",
    image:
      "https://res.cloudinary.com/dtgusyvdy/image/upload/v1578401170/adidas_kllcin.png"
  },
  {
    name: "RED NIKE",
    brand: "Nike",
    color: "Red",
    price: "25 € ",
    image:
      "https://res.cloudinary.com/dtgusyvdy/image/upload/v1578402662/NikeRed_x2krep.png"
  },
  {
    name: "TEE SHIRT CHICAGO TEXT",
    brand: "Mitchell & Ness",
    color: "Grey",
    price: "240 €",
    image:
      "https://res.cloudinary.com/dtgusyvdy/image/upload/v1578402789/GreyChicago_tb2cib.png"
  },
  {
    name: "DR PAPER PANAME GRAPHIC",
    brand: "Courir",
    color: "Pink",
    price: "5 €",
    image:
      "https://res.cloudinary.com/dtgusyvdy/image/upload/v1578402873/panamePink_epdrez.png"
  },
  {
    name: "HERITAGE LOGO",
    brand: "Ellesse",
    color: "Black",
    price: "15 €",
    image:
      "https://res.cloudinary.com/dtgusyvdy/image/upload/v1578403000/blackEllesse_tt5nmr.png"
  },
  {
    name: "MINIMOTIF TRIANGLE",
    brand: "Courir",
    color: "Beige",
    price: "40 €",
    image:
      "https://res.cloudinary.com/dtgusyvdy/image/upload/v1578403102/beigeTriangle_oqrqsv.png"
  },
  {
    name: "TEE SHIRT MESH LOGO",
    brand: "Lacoste",
    color: "Green",
    price: "60 €",
    image:
      "https://res.cloudinary.com/dtgusyvdy/image/upload/v1578403312/greenLacoste_amuqpo.png"
  },
  {
    name: "TEE SHIRT NASA",
    brand: "Mister Tee",
    color: "Green",
    price: "45 €",
    image:
      "https://res.cloudinary.com/dtgusyvdy/image/upload/v1578403389/nasa_barage.png"
  },
  {
    name: "TEE SHIRT JUST DO IT",
    brand: "Nike",
    color: "Red",
    price: "75 €",
    image:
      "https://res.cloudinary.com/dtgusyvdy/image/upload/v1578403470/Justdo_wqszi8.png"
  }
];

mongoose
  .connect("mongodb://localhost/back-teeShirtz", { useNewUrlParser: true })
  .then(() => {
    console.log(
      'Connected to Mongo!'
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

teeShirtModel
  .insertMany(teeShirtz)
  .then(dbResult => {
    console.log("the tee shirts have been inserted");
  })
  .catch(err => {
    console.error("Damn, error connecting to mongo");
  });
