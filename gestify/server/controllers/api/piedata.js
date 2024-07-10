const PieData = require("../../db/models/Pie");

//get all products
const getPies = async (req, res) => {
  try {
    const piedata = await PieData.find({});
    res.status(200).json(piedata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get single product by id
const getPie = async (req, res) => {
  try {
    const { id } = req.params;
    const piedata = await PieData.findById(id);
    res.status(200).json(piedata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create product
const createPie = async (req, res) => {
  try {
    const piedata = await PieData.create(req.body);
    res.status(200).json(piedata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a product by id
const updatePie = async (req, res) => {
  try {
    const { id } = req.params;
    const piedata = await PieData.findByIdAndUpdate(id, req.body);

    if (!piedata) {
      return res.status(404).json({ message: "product not found" });
    }

    const updatedpie = await PieData.findById(id);
    res.status(200).json(updatedpie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete a product by id
const deletePie = async (req, res) => {
  try {
    const { id } = req.params;
    const piedata = await PieData.findByIdAndDelete(id);
    PieData;
    if (!piedata) {
      return res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPies,
  getPie,
  createPie,
  updatePie,
  deletePie,
};
