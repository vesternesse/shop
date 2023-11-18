const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');

require('dotenv').config();


async function init() {
  const port = process.env.PORT

  const app = express();
  app.use(bodyParser.json());
  app.use('/auth', authRouter);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}



const startApp = init();


