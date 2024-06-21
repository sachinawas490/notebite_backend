const express = require("express");

const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("./db.js");
require("dotenv").config();

const userroutes = require("./routes/userroutes.js");

app.use("/user", userroutes);
const noteroutes = require("./routes/noteroutes.js");
app.use("/note", noteroutes);

app.listen(4000, () => {
	console.log("Server is running on port 4000");
});
