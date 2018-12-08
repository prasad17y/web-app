const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());



//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
/*mongoose.connect(db)
  .then(() => console.log("MongoDB Connected...."))
  .catch(err => console.log(err));*/

  const port = 8080;
const server = http.createServer(app);
require('./routes')(app);
  app.listen(port,() => console.log(`Server started on port ${port}`));
