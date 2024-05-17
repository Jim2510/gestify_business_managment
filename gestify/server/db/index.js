const mongoose = require("mongoose");
require("dotenv").config();
const {DB_URL}=process.env
const connect = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("DB connected");
  } catch (error) {
    throw error;
  }
};

const disconnect = async () => await mongoose.disconnect();

const models = {
  Product: require("./models/Product"),
  Orders: require("./models/Orders"),
  Customer: require("./models/Customer"),
  Collection: require("./models/Collection"),
};

module.exports = {
  connect,
  disconnect,
  ...models,
};
