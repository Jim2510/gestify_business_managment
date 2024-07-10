const BarSale = require("../../db/models/BarSale");

//get all products
const getBarSales = async (req, res) => {
  try {
    const barsale = await BarSale.find({});
    res.status(200).json(barsale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get single product by id
const getBarSale = async (req, res) => {
  try {
    const { id } = req.params;
    const barsale = await BarSale.findById(id);
    res.status(200).json(barsale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create product
const createBarSale = async (req, res) => {
  try {
    const barsale = await BarSale.create(req.body);
    res.status(200).json(barsale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a product by id
const updateBarSale = async (req, res) => {
  try {
    const { id } = req.params;
    const barsale = await BarSale.findByIdAndUpdate(id, req.body);

    if (!barsale) {
      return res.status(404).json({ message: "product not found" });
    }

    const updatedsale = await BarData.findById(id);
    res.status(200).json(updatedsale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete a product by id
const deleteBarSale = async (req, res) => {
  try {
    const { id } = req.params;
    const barsale = await BarSale.findByIdAndDelete(id);
    if (!barsale) {
      return res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBarSales,
  getBarSale,
  createBarSale,
  updateBarSale,
  deleteBarSale,
};
