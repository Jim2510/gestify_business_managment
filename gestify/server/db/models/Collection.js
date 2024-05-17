const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema({
  collection1: [
    {
      name: {
        type: String,
        required: true,
      },
      uv: {
        type: Number,
        required: true,
      },
      amt: {
        type: Number,
        required: true,
      },
    },
  ],
  collection2: [
    {
      name: {
        type: String,
        required: true,
      },
      uv: {
        type: Number,
        required: true,
      },
      amt: {
        type: Number,
        required: true,
      },
    },
  ],
  collection3: [
    {
      name: {
        type: String,
        required: true,
      },
      uv: {
        type: Number,
        required: true,
      },
      amt: {
        type: Number,
        required: true,
      },
    },
  ],
  collection4: [
    {
      name: {
        type: String,
        required: true,
      },
      uv: {
        type: Number,
        required: true,
      },
      amt: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Collection = mongoose.model("Collection", CollectionSchema);

module.exports = Collection;
