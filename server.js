const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const routes = require("./routes");
const port = process.env.PORT || 5000;


const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

//Seed Database
const seedProducts = require("./seedProducts/index");
seedProducts();

// Connect to MongoDB
mongoose.connect(
    (process.env.MONGODB_URI || db),
    { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  // .then(seedProducts())
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());



// Passport config
require("./config/passport")(passport);

// Routes
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'client/build' ));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
  });
}

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

// https://git.heroku.com/floating-plateau-34364.git
