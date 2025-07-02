// backend/routes/shop.js
const express = require('express');
const router = express.Router();

// Dummy shop items
const items = [
  { id: 1, name: "Watch", price: 100 },
  { id: 2, name: "Shoes", price: 150 },
];

// Get all items
router.get('/items', (req, res) => {
  res.json(items);
});

module.exports = router;
