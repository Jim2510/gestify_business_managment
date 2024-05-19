const BarData = require("../../db/models/Bar");

//get all products
const getBars = async (req, res) => {
  try {
    const bardata = await BarData.find({});
    res.status(200).json(bardata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get single product by id
const getBar = async (req, res) => {
  try {
    const { id } = req.params;
    const bardata = await BarData.findById(id);
    res.status(200).json(bardata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create product
const createBar = async (req, res) => {
  try {
    const bardata = await BarData.create(req.body);
    res.status(200).json(bardata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a product by id
const updateBar = async (req, res) => {
  try {
    const { id } = req.params;
    const bardata = await BarData.findByIdAndUpdate(id, req.body);

    if (!bardata) {
      return res.status(404).json({ message: "product not found" });
    }

    const updatedbar = await BarData.findById(id);
    res.status(200).json(updatedbar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete a product by id
const deleteBar = async (req, res) => {
  try {
    const { id } = req.params;
    const bardata = await BarData.findByIdAndDelete(id);
    if (!bardata) {
      return res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBars,
  getBar,
  createBar,
  updateBar,
  deleteBar,
};
