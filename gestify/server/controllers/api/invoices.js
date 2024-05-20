const Invoice = require("../../db/models/Invoice");

//get all products
const getInvs = async (req, res) => {
  try {
    const invoices = await Invoice.find({});
    console.log(invoices);
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get single product by id
const getInv = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findById(id);
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create product
const createInv = async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(200).json(Invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a product by id
const updateInv = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findByIdAndUpdate(id, req.body);

    if (!invoice) {
      return res.status(404).json({ message: "product not found" });
    }

    const updatedInv = await Product.findById(id);
    res.status(200).json(updatedInv);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete a product by id
const deleteInv = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findByIdAndDelete(id);

    if (!invoice) {
      return res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getInvs,
  getInv,
  createInv,
  updateInv,
  deleteInv,
};
