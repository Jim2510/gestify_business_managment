const Collection = require("../../db/models/Collection");

const getCollections = async (req, res) => {
  try {
    const collections = await Collection.find({});
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCollections;
