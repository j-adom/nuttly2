const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const routes = require("./routes");
const seedProducts = require("./seedProducts");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const dbLocal = require("./config/keys").mongoURI;
const dbProduction = require("./config/keys").MONGOLAB_URI;


// Connect to MongoDB
mongoose
  .connect(
    (dbLocal || dbProduction),
    { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());



// Passport config
require("./config/passport")(passport);

// Routes
app.use(routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
