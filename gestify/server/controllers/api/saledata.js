const SaleData = require("../../db/models/SaleD");

//get all products
const getSales = async (req, res) => {
  try {
    const saledata = await SaleData.find({});
    res.status(200).json(saledata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get single product by id
const getSale = async (req, res) => {
  try {
    const { id } = req.params;
    const saledata = await SaleData.findById(id);
    res.status(200).json(saledata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create product
const createSale = async (req, res) => {
  try {
    const saledata = await SaleData.create(req.body);
    res.status(200).json(saledata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a product by id
const updateSale = async (req, res) => {
  try {
    const { id } = req.params;
    const saledata = await SaleData.findByIdAndUpdate(id, req.body);

    if (!saledata) {
      return res.status(404).json({ message: "product not found" });
    }

    const updatedSale = await SaleData.findById(id);
    res.status(200).json(updatedSale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete a product by id
const deleteSale = async (req, res) => {
  try {
    const { id } = req.params;
    const saledata = await SaleData.findByIdAndDelete(id);

    if (!saledata) {
      return res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSales,
  getSale,
  createSale,
  updateSale,
  deleteSale,
};
