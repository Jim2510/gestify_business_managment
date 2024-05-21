const Invoice = require("../../db/models/Invoice");

// get all invoices
const getInvs = async (req, res) => {
  try {
    const invoices = await Invoice.find({});
    console.log(invoices);
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get single invoice by id
const getInv = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findById(id);
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create invoice
const createInv = async (req, res) => {
  try {
    const { description, tot, number } = req.body;
    // Non includere il campo id nel corpo della richiesta
    const invoice = new Invoice({
      description,
      tot,
      number,
    });
    await invoice.save();
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update an invoice by id
const updateInv = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete an invoice by id
const deleteInv = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findByIdAndDelete(id);

    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    res.status(200).json({ message: "Invoice deleted successfully" });
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
