require("dotenv").config();
require("./config/dbConfig.js");


const express = require("express");
const cors = require("cors");
const app = express();
const session = require("express-session"); //sessions make data persist between http calls

app.use(express.json());
/*
Create a session middleware with the given options.
Note:  Session data is not saved in the cookie itself, just the session ID. 
Session data is stored server-side.
*/
app.use(
  session({
    cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }, // 4 hours
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET_SESSION
  })
);

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  /* credentials : Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted  https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials */
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


app.get("/", (req, res) => {
  res.send("base route server");
});



app.listen(process.env.PORT, () => {
  console.log("Server listening on port http://localhost:" + process.env.PORT);
});