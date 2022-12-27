const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();
const colors = require('colors')
const connectToDb  = require("./database/db.js");
const cors = require('cors');
app.use(cors())

const port = process.env.PORT || 8088;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToDb()
app.use("/users", require("./router/usersRouter.js"));

app.listen(port, () => console.log(`Server is running on PORT ${port}`.bgMagenta.blue));
