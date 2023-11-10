const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');

require('dotenv').config();


async function init() {
  const port = process.env.PORT
  const database = process.env.DB

  const app = express();
  app.use(bodyParser.json());
  app.use('/auth', authRouter);

  const dbConnect = await connectToDatabase(database)

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

async function connectToDatabase(database) {
  try {
    await mongoose.connect(database);
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('Error conecting to Mongo: ', error)
  }
}

const startApp = init();


