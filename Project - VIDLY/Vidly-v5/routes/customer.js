const express = require("express");
const router = express.Router();
const {Customer, validateCustomer} = require('../models/customer');
const auth = require('../middlewares/auth');




router.get("/",auth, async (req, res) => {
  const customers = await Customer.find();
  if (!customers || customers.length == 0)
    return res.status(404).send("No Customers Found");
  res.send(customers);
});

router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) return res.send("No customer found for this ID");
  res.send(customer);
});

router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) return res.status(404).send("No customer found for this ID");
  res.send(customer);
});

router.delete("/:id",auth, async (req, res) => {
  const customer = await Customer.findByIdAndDelete(req.params.id);
  if (!customer) return res.status(404).send("No customer found for this ID");
  res.send(customer);
});

router.post("/",auth, async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.message);
  const customer = new Customer({
    name: req.body.name,
    phone: req.body.phone,
    isGold: req.body.isGold,
  });
  await customer.save();
  res.send(customer);
});

router.put("/:id",auth, async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.message);
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold,
      },
      { new: true }
    );
    if(!customer) return res.status(404).send("Customer not found");
    res.send(customer);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
