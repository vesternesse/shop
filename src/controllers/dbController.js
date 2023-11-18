const User = require('./models/user')
const bcrypt = require('bcrypt')
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env')});
const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    const dbLink = process.env.DB;
    const conn = await mongoose.connect(dbLink);
    console.log('Successfully connected to MongoDB');
    return conn;
  } catch (error) {
    console.error('Error conecting to Mongo: ', error)
    throw error;
  }
}

async function addUser(usernameReq, passwordReq) {
  try {
    const newUser = new User({
      username: usernameReq,
      password: passwordReq
    });

    const user = await newUser.save();
    console.log('User added', user);
    return user;
  } catch (err) {
    console.error('Error adding user: ', err);
    throw err;
  }
}
module.exports = {
  connectToDatabase,
  addUser
};