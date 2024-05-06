const Orders = require("../../db/models/Orders");

const getOrders = async (req, res) => {
  try {
    const orders = await Orders.find({});
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const orders = await Orders.findByIdAndUpdate(id, req.body);

    if (!orders) {
      return res.status(404).json({ message: "order not found" });
    }

    const updateOrder = await Product.findById(id);
    res.status(200).json(updateOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
