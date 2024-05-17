const mongoose = require("mongoose");
require("dotenv").config();


const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
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
};

module.exports = {
  connect,
  disconnect,
  ...models,
};
