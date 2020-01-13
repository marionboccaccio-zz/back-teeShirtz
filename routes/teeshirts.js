const express = require("express");
const router = express.Router();
const teeShirtModel = require("../model/TeeShirt");

router.get("/teeShirtz"),
  (req, res) => {
    teeShirtModel
      .find()
      .then(dbRes => {
        res.status(200).send(dbRes);
      })
      .catch(dbErr => console.log(dbErr));
  };

module.exports = router;
