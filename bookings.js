// backend/routes/bookings.js
const express = require('express');
const router = express.Router();

// Dummy Booking API
router.post('/bus', (req, res) => {
  const { from, to, date } = req.body;
  res.json({ message: "Bus booked successfully", booking: { from, to, date } });
});

module.exports = router;
