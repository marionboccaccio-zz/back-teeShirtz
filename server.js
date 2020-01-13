require("dotenv").config();
require("./config/dbConfig.js");

const express = require("express");
const cors = require("cors");
const app = express();

app.listen(process.env.PORT, () => {
  console.log("Server listening on port http://localhost:" + process.env.PORT);
});



app.use(cors(process.env.FRONT_URL));
app.use(express.json());


const teeshirtRouter = require("./routes/teeshirts");
app.use(teeshirtRouter);