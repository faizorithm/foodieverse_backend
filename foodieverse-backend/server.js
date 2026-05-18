const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/foodieverse")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


const Menu = mongoose.model("Menu", {
  name: String,
  price: Number,
  category: String
});

const Order = mongoose.model("Order", {
  items: Array,
  total: Number,
  createdAt: { type: Date, default: Date.now }
});

app.get("/", (req, res) => {
    res.send("SERVER WORKS");
  });
  app.get("/api/menu", async (req, res) => {
    try {
      const items = await Menu.find();
      res.json(items);
    } catch (err) {
      res.status(500).send("Error fetching menu");
    }
  });

app.post("/api/orders", async (req, res) => {
  console.log("ORDER RECEIVED:", req.body);
  const order = new Order(req.body);
  await order.save();
  res.json(order);
});


app.listen(3001, () => {
    console.log("Server running on port 3001");
  });