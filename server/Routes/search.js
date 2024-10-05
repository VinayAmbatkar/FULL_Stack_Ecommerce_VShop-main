const { Product } = require("../models/products.js");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  try {
    const query = req.query.q;

    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage);
    var totalPosts = [];
    var totalPages = 0;

    if (!query) {
      return res.status(400).json({ msg: "Query is required" });
    }

    if (req.query.page !== ""  && req.query.page !== undefined && req.query.perPage !== "" && req.query.perPage !== undefined) {
      const items = await Product.find({
        $or: [
          { name: { $regex: query, $options: "i" } },
          { brand: { $regex: query, $options: "i" } },
          { catName: { $regex: query, $options: "i" } },
        ],
      })
        .populate("category")
       

        totalPosts = await items.length;
        totalPages = Math.ceil(totalPosts / perPage);

        return res.status(200).json({
            products: items,
            totalPages: totalPages,
            page: page,
          });

    } else {
      const items = await Product.find({
        $or: [
          { name: { $regex: query, $options: "i" } },
          { brand: { $regex: query, $options: "i" } },
          { catName: { $regex: query, $options: "i" } },
        ],
      });

      res.json(items);
    }
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
